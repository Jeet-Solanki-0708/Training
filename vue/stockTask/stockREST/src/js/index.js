const path = require('path')
const express = require('express')
const signupRouter=require('../router/signup')
const signinRouter=require('../router/signin')
const listRouter=require('../router/list')

const app = express()

app.use(express.json())

app.use(signupRouter)
app.use(signinRouter)
app.use(listRouter)

app.listen(3000, () => {
    console.log('Server is up on port ')
})