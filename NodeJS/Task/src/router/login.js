const path=require('path')
const express = require('express')
const user = require('../model/user')
const Sequelize  = require('sequelize')
const moment=require('moment')
const bodyParser=require('body-parser')

const auth=require('../js/auth')
const authToken=require('../middleware/authToken')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const urlencodedParser=bodyParser.urlencoded({ extended: false })

const router=new express.Router()

router.post('/login',urlencodedParser ,(req, res) => {
    let {email,password}=req.body
    //if(email.length)
    user.User.findAll({
        where: {
            email:email,
            password:password
        }
    }).then(async (data)=>{
        console.log("In")
        if(data.length===0){
            const errorMessage='Enter correct Email/Password'
            return res.render('login',{
                errorMessage
            })
        }
        console.log("Email" + email)
        await user.auditTable.update({updatedAt:moment().format('MMMM Do YYYY, h:mm:ss a')},{
            where: {
                createdBy: email
            }
        }).then((innerdata)=>{
                if(innerdata.length===0){
                    return res.status(404).send()
                }
        }).catch((err)=>{
            console.log(err)
        })
        console.log("In")
        await localStorage.setItem('email',email)
        await auth.generateJWT(data[0].id,email)
        await res.redirect('/show')
    }).catch(err=>{
            console.log(err)
            const errorMessage=err.errors[0].message
            res.render('index',{
            errorMessage
        })
    })
    
})

module.exports = router