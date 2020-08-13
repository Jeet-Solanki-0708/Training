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

const ne=new Person('Dhairya','Shah',22)
console.log(ne.getBio())

ne.setName('Umang Sha')
console.log(ne.getBio())

const ne1=new Person('Dhairya','Shah',27)

