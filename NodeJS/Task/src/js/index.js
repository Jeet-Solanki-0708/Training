const path = require('path')
const express = require('express')
const userRouter = require('../router/signup')
const loginRouter = require('../router/login')
const showRouter = require('../router/showDetails')
const logoutRouter = require('../router/logout')

const app = express()

app.use(express.json())

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
console.log(path.join(__dirname, '../public'))
app.use(express.static(path.join(__dirname, '../public')))

app.use(userRouter)
app.use(loginRouter)
app.use(showRouter)
app.use(logoutRouter)

app.get('/', (req, res) => {
    res.render('signup')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.listen(3046, () => {
    console.log('Server is up on port ')
})