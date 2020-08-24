const express = require('express')
const user = require('../model/user')
const moment = require('moment')
const bodyParser = require('body-parser')
const auth = require('../js/auth')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = new express.Router()

router.post('/login', urlencodedParser, (req, res) => {
    let { email, password } = req.body
    user.User.findAll({
        where: {
            email: email,
            password: password
        }
    }).then(async (data) => {
        if (data.length === 0) {
            const errorMessage = 'Enter correct Email/Password'
            return res.render('login', {
                errorMessage
            })
        }
        await user.auditTable.update({ updatedAt: moment().format('MMMM Do YYYY, h:mm:ss a') }, {
            where: {
                createdBy: email
            }
        }).then((innerdata) => {
            if (innerdata.length === 0) {
                return res.status(404).send()
            }
        }).catch((err) => {
            console.log(err)
        })
        await localStorage.setItem('email', email)
        await auth.generateJWT(data[0].id, email)
        await res.redirect('/showDetails')
    }).catch(err => {
        const errorMessage = err.errors[0].message
        res.render('login', {
            errorMessage
        })
    })

})

module.exports = router