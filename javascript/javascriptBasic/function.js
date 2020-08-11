let square=function(num){
    return num*num
}

let ans=square(3)
console.log(ans)

let text=function(name='Anonymous',score=0){
    let a
    // return name+' '+score
    return `name is ${name}`
}

ans=text(undefined,10)
console.log(ans)
// console.log(a)