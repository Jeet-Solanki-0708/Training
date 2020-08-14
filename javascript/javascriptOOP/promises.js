// const getDataCallBack=(callback)=>{
//     setTimeout(()=>{
//         callback(undefined,'THis is data')
//         callback(undefined,'THis is data')
//     },2000)
// }

// getDataCallBack((err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}


getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err')
            } else {
                console.log(data)
            }
        })
    }
})

// getDataCallBack((err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })



const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


fetch('http://puzzle.mead.io/puzzle',{}).then((response)=>{
    if(response.status===200){
        return response.json()
    }else{
        throw new Error('Unable to fetch')
    }
}).then((data)=>{
    console.log(data.puzzle)
}).catch((error)=>{
    console.log(error)
})

// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //resolve('THis is promise data')
//         reject('This is promise')
//         reject('This is promise')
//     },2000)
// })

// myPromise.then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

// myPromise.then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })