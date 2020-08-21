const Sequelize  = require('sequelize');

const db=require('../db/connection')

const User=db.define('User',{
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.NUMBER
    }
})


module.exports = User