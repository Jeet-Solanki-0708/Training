const square=(num)=> num*num

console.log(square(5))

const people=[{
    name:'Dhairya',
    age:22
},{
    name:'Dhairya',
    age:22
},{
    name:'Dhairya',
    age:32
}]

const under30=people.filter((person)=>person.age<30)

console.log(under30)
for(x of under30){
    console.log(x.name)
}

const check=(num)=>{
        if(typeof num!==Number){
            throw Error('Not a Number')
        }
}

try{
    data = 5
    check('5')
    console.log('Inside try')
}catch(e){
    console.log('In catch')
}
console.log(data)