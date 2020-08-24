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

router.post('/users',urlencodedParser ,(req, res) => {
    console.log(req.body)
    let {firstName,lastName,email,password,age}=req.body
    age=parseInt(age)
    user.User.create({
        firstName,lastName,email,password,age
        }).then(async (data)=>{
            user.auditTable.create({
                createdAt:moment().format('MMMM Do YYYY, h:mm:ss a'),
                updatedAt:moment().format('MMMM Do YYYY, h:mm:ss a'),
                createdBy:email
            }).catch(err=>{
                console.log(err)
            })
            localStorage.setItem('email',email)
            auth.generateJWT(data.id,email)
            res.redirect('/show')
        }).catch(err=>{
            const errorMessage=err.errors[0].message
            res.render('index',{
            errorMessage
        })
    })  
})

module.exports = router