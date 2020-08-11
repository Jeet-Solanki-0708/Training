const user={
    name:'Dhairya',
    age:22
}

// const userJSON=JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user',userJSON)

const userJSON=localStorage.getItem('user')
const user=JSON.parse(userJSON)
console.log(`${user.name} ${user.age}`)

