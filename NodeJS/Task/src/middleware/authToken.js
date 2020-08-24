var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authToken=async (req,res,next)=>{
    try {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        //console.log(email)
        //console.log(token)
        //const val = await bcrypt.hash(email, 8)
        //console.log("val "+val)
        const decoded = jwt.verify(token,email)
        //console.log(decoded)
        req.email=email
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports=authToken