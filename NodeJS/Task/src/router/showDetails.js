const express = require('express')
const user = require('../model/user')
const authToken = require('../middleware/authToken')
const router = new express.Router()
const { Op } = require("sequelize");

router.get('/showDetails', authToken, async (req, res) => {
    user.User.findAll({
        where: {
            id: req.id
        }
    }).then((data) => {
        let { firstName, lastName, email, password, age } = data[0]
        res.render('showDetails', {
            firstName, lastName, email, password, age
        })
    }).catch(err => {
        res.status(500).send(err)
    })
})

router.get('/otherUsers', authToken, async (req, res) => {
    user.User.findAll({
        where: {
            id: { [Op.ne]: req.id }
        }
    }).then((data) => {
        res.render('otherUsers', {
            data
        })
    }).catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router