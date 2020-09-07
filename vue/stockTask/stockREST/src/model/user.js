const Sequelize = require('sequelize');

const db = require('../db/connection')

const User = db.define('User', {
    email: {
        type: Sequelize.STRING(30),
        validate: {
            isEmail: {
                msg: "Must be an email"
            },
            isUnique(value) {
                return User.findOne({where:{email:value}})
                  .then((name) => {
                    if (name) {
                      throw new Error('Email already exist');
                    }
                  })
              }
        }
    },
    password: {
        type: Sequelize.STRING(100),
        validate: {
            notEmpty: {
                msg: "Password cannot be empty"
            }
        }
    },
    age: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "age cannot be empty"
            },
            min: {
                args: 18,
                msg: "Age must be greater than 18"
            }
        }
    },
    role: {
        type: Sequelize.STRING(10)
    },
    createdAt: {
        type: Sequelize.STRING(50)
    },
    createdBy: {
        type: Sequelize.STRING(30)
    },
    updatedBy:{
        type: Sequelize.STRING(30)
    },
    updatedAt: {
        type: Sequelize.STRING(50)
    }
})

User.sync().then(() => {
    console.log('table created');
}).catch((err) => { console.log('Error', err) });


module.exports = { User }