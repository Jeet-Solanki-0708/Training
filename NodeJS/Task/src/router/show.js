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

router.get('/show',authToken,async (req,res)=>{
    user.User.findAll({
        where: {
            email:req.email
        }
    }).then((data)=>{
        let {firstName,lastName,email,password,age}=data[0]
        res.render('info',{
            firstName,lastName,email,password,age
        })
    }).catch(err=>{
        res.status(500).send(err)
    })
})

module.exports=router