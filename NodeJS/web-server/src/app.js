const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geo=require('./utils/geo')
const forecast=require('./utils/forecast')

const app=express()
//console.log(express.static(path.join(__dirname,'../public')))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))

app.use(express.static(path.join(__dirname,'../public')))

// app.get('',(req,res)=>{
//     res.send('<h1>Home Page</h1>')
// })
app.get('/weather',(req,res)=>{
    console.log(req.query)
    if(!req.query.address){
        return res.send({
            error:"Parameter Not provided"
        })
    }
    geo(req.query.address,(error,data)=>{
        if(error){
            return res.send({
                error
            })
        }
        forecast(data.latitude,data.longitude,(error,foredata)=>{
            if(error){
                return res.send({
                    error
                })
            }

            res.send({
                location: data.location,
                foredata
            })
        })
    })
})

app.get('',(req,res)=>{
    res.render('index',{
        title:'About',
        name:'Dhairya'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Dhairya'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Dhairya'
    })
})

app.get('/title',(req,res)=>{
    res.send('title Page')
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Dhairya',
        errorMessage:'Help Page not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Dhairya',
        errorMessage:'Page not found'
    })
})

app.listen(3001,()=>{
    console.log('Server')
})