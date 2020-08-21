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
        type:Sequelize.INTEGER
    }
})

const Customer=db.define('Customer',{
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
        type:Sequelize.INTEGER
    }
})

User.sync().then(() => {
    console.log('table created');
}).catch((err)=>{console.log('Error',err)});

Customer.sync().then(() => {
    console.log('table created');
}).catch((err)=>{console.log('Error',err)});


module.exports = {User,Customer}