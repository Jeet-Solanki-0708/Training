//index.js main js file which is in src/js folder
// http://localhost:3046/users is used to run signup page
// http://localhost:3046/login is used to run login page
// router folder contains all routes


const path=require('path')
const express = require('express')
const user = require('../model/user')
const Sequelize  = require('sequelize')
const moment=require('moment')
const bodyParser=require('body-parser')
const userRouter = require('../router/user')
const loginRouter = require('../router/login')
const showRouter = require('../router/show')

const auth=require('../js/auth')
const authToken=require('../middleware/authToken')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const urlencodedParser=bodyParser.urlencoded({ extended: false })


const app = express()

app.use(express.json())

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
console.log(path.join(__dirname,'../public'))
app.use(express.static(path.join(__dirname,'../public')))

app.use(userRouter)
app.use(loginRouter)
app.use(showRouter)

app.get('/users', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.listen(3046, () => {
    console.log('Server is up on port ')
})