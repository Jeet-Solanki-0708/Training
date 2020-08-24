const jwt = require('jsonwebtoken')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const generateJWT = async (id, email) => {
    const token = await jwt.sign({ _id: id }, email)
    localStorage.setItem('token', token)
}

module.exports = { generateJWT }