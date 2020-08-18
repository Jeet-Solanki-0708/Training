const request=require('request')
const geo=require('./geo')
const forecast=require('./forecast')


// request({url:url},(error,response)=>{
//     const data=JSON.parse(response.body)
//     console.log(data.current)
// })

// request({url:url,json:true},(error,response)=>{
//     console.log(response.body.current.wind_speed)
// })

geo('India',(error,data)=>{
    if(error){
        return console.log(error)
    }
    forecast(data.latitude,data.longitude,(error,foredata)=>{
        if(error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(foredata)
    })
})



