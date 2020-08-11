let info={
    name: 'Dhairya',
    age:22,
    location:'Ahmedabad'
}

let info1={
    name: 'Umang',
    age:22,
    location:'Ahmedabad'
}
console.log(`${info.name} is ${info.age} and lives in ${info.location}`)

info.age=info.age+1

console.log(`${info.name} is ${info.age} and lives in ${info.location}`)

let getSummary=function(student){
    return {
        summary:`${student.name} : ${student.age}`,
        fullInfo:`${student.name} : ${student.age}:${student.location}`
    }
}

let studentSummary=getSummary(info)
let otherSummary=getSummary(info1)
console.log(studentSummary.summary)
console.log(otherSummary.summary)


let restaurant={
    name:'Taj',
    guestCapacity:75,
    guestCount:0,
    checkAvailability: function(partysize){
        let seatLeft=this.guestCapacity-this.guestCount
        return partysize <= seatLeft
    },
    seatParty: function(partysize){
        this.guestCount=this.guestCount+partysize
    },
    removeParty: function(partysize){
        this.guestCount=this.guestCount-partysize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))