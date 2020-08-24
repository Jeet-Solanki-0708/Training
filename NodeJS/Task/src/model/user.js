const Sequelize = require('sequelize');

const db = require('../db/connection')

const User = db.define('User', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: {
                msg: "Must be an email"
            }
        }
    },
    firstName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "First Name cannot be empty"
            }
        }
    },
    lastName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Last Name cannot be empty"
            }
        }
    },
    password: {
        type: Sequelize.STRING,
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
    }
})

const auditTable = db.define('auditTable', {
    createdAt: {
        type: Sequelize.STRING,
    },
    createdBy: {
        type: Sequelize.STRING,
    },
    updatedAt: {
        type: Sequelize.STRING,
    }
})

User.sync().then(() => {
    console.log('table created');
}).catch((err) => { console.log('Error', err) });

auditTable.sync().then(() => {
    console.log('table created');
}).catch((err) => { console.log('Error', err) });

module.exports = { User, auditTable }