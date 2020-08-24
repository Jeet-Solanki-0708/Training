const jwt = require('jsonwebtoken')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const bcrypt = require('bcryptjs')

const generateJWT=async (id,email) => {
    //console.log(id+" In1 "+email)
    const val=await bcrypt.hash(email, 8)
    //const key=await bcrypt.hash(id, 8)
    //console.log(key+" In2 "+val)
    const token = await jwt.sign({ _id: id },email)
    //console.log("Token"+token)
    //console.log("val"+val)
    localStorage.setItem('token',token)
    //console.log("Token in"+localStorage.getItem('token'))
}

module.exports={generateJWT}