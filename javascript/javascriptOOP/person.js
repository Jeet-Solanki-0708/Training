class PersonClass{
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }
    getBio(){
        return `${this.firstName} is ${this.age}`
    }
    setName(fullName){
        const name=fullName.split(' ')
        this.firstName=name[0]
        this.lastName=name[1]
    }
}

const ne2=new PersonClass('Jeet','Shah',22)
console.log(ne2.getBio())

const Person=function(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
}

Person.prototype.getBio=function(){
    return `${this.firstName} is ${this.age}`
}

Person.prototype.setName=function(fullName){
    const name=fullName.split(' ')
    this.firstName=name[0]
    this.lastName=name[1]
}

class Employee extends PersonClass{
    constructor(likes){
        super()
        this.likes=likes
    }
    getBio(){
        console.log('In Employee getBio')
    }
}

const ne =new Employee('Dhairya')
console.log(ne)
console.log(ne.getBio())


// const ne=new Person('Dhairya','Shah',22)
// console.log(ne.getBio())

// ne.setName('Umang Sha')
// console.log(ne.getBio())

// const ne1=new Person('Dhairya','Shah',27)

