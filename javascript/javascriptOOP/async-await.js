const getDataPromise=(num)=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(typeof Number){
            resolve(num*2)
        }else{
            reject('Number must be provided')
        }
    })
})

const processData=async()=>{
    let data=await getDataPromise(2)
    data=await getDataPromise(data)
    data=await getDataPromise(data)
    return data
}

processData().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})