const jwt = require('jsonwebtoken')

const generateJWT = async (data, email) => {
    const token = await jwt.sign({ _id: data.id , email: data.email ,expiresIn: 5*60*1000 ,role: data.role }, email)
    return token
}

module.exports = { generateJWT }