var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const jwt = require('jsonwebtoken')

const authToken = async (req, res, next) => {
    try {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const decoded = await jwt.verify(token, email)
        req.id = decoded._id
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = authToken