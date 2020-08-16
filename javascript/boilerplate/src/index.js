// import {add,name} from './utilies'
// import otherScream from './scream'

// console.log('In index!!')
// console.log(add(1,12))
// console.log(otherScream('abc'))

const calculateAverage=(first,second,...numbers)=>{
    let sum=0
    numbers.forEach((num)=>{
        sum=sum+num
    })
    return sum
}

console.log(calculateAverage(10,20,30))


const cities=['abc','Barcelona','Madrid']
const copy=[...cities]

copy.push('Ahmedabd')

console.log(cities)
console.log(copy)

const a={
    city:'Ahmedabad'
}

const b={
    ...a,
    city:'Barca'
}

console.log(a)
console.log(b)