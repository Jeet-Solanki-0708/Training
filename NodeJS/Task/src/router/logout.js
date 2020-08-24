const express = require('express')
const user = require('../model/user')
const authToken = require('../middleware/authToken')
const router = new express.Router()

router.get('/logout', authToken, (req, res) => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    res.redirect('/login')
})

module.exports = router