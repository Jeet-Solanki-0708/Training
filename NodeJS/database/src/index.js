const express = require('express')
const database=require('./db/connection')
const user = require('./model/user')
const Sequelize  = require('sequelize');
const bcrypt = require('bcrypt');
const app = express()

database.sync().then(() => {
    console.log('table created');
}).catch((err)=>{console.log('Error',err)});

app.use(express.json())

app.post('/users', (req, res) => {
    console.log(req.body)
    let {name,email,password,age}=req.body
    //console.log(name)
    //console.log(email)
    console.log('p1 '+password)
    
    user.User.create({
        name,email,password,age
    }).then(data=>res.send(data))
      .catch(err=>{
          res.status(400).send(err)
      })  
})


app.get('/users',(req,res)=>{
    user.findAll().then(data=>res.send(data))
    .catch(err=>{
        res.status(500).send(err)
    }) 
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id
    user.findAll({
        where: {
            id: id
        }
    }).then(data=>{
            if(data.length===0){
                return res.status(404).send()
            }
            res.send(data)
        })
    .catch(err=>{
        res.status(500).send(err)
    })
})

app.patch('/users/:id',(req,res)=>{
    const id=req.params.id
    let {name,email,password,age}=req.body
    console.log(req.body)
    const updates=Object.keys(req.body)
    console.log(updates)
    const allowedUpdates=['name','email','password','age']
    const isValid=updates.every((update)=>allowedUpdates.includes(update))
    if(!isValid){
        return res.status(400).send({error:'Invalid updates!'})
    }
    user.update({"name":name,"email":email,"password":password,"age":age},{
        where: {
            id: id
        }
    }).then(data=>{
            if(data.length===0){
                return res.status(404).send()
            }
            res.send(data)
        })
    .catch(err=>{
        res.status(500).send(err)
    })
})

app.delete('/users/:id',(req,res)=>{
    const id=req.params.id
    user.destroy({
        where:{
            id:id
        }
    }).then(data=>{
        if(data.length===0){
            return res.status(500).send(err)
        }
        res.send('deleted')
    }).catch(err=>{
        res.status(500).send(err)
    })
})



app.listen(3001, () => {
    console.log('Server is up on port ')
})