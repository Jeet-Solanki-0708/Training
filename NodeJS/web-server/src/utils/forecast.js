const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=f00680901872ed2294b41759566e0534&query='+latitude+','+longitude+''

    request({url:url,json:true},(error,response)=>{
        if (error) {
            callback('Unable to connect to weather service',undefined)
        } else if (response.body.error) {
            callback('Unable to find ',undefined)
        } else {
            callback(undefined,{
                weather_descriptions:response.body.current.weather_descriptions
            })
        }
    })
}

module.exports=forecast