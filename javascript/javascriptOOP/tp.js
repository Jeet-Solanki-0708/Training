// const puzzleCallback = (data) => console.log(data)


// getPuzzle(puzzleCallback)

// const getPuzzle = (puzzlecallback = callback) => {

//     XMLHttpRequest(e, (result) => {
//         const response = result.data
//         callback(response)
//     })
// }


// let add = (function () {
//     let counter = 0;
//     return function () {counter += 1;  console.log(counter)}
//   })();
  
//   add();
//   add();
//   add();
 


const getDataCallBack=(callback)=>{
    console.log('1')
    setTimeout(()=>{
        callback(undefined,'THis is data')
        console.log('2')
    },2000)
    console.log('3')
}

getDataCallBack((err,data)=>{
    console.log('4')
    if(err){

    }else{
        console.log(data)
    }
    console.log('5')
})