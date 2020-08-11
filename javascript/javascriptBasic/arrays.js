const name=['ab','Dhairya','Jeet','Umang']

console.log(name[0])
console.log(name[name.length-1])

name.push('Sarang')
console.log(name)

name.pop()
console.log(name)

name.unshift('Sarang')
console.log(name)

name.shift()
console.log(name)

name.splice(3,1)
console.log(name)

name.splice(3,0,'Umang')
console.log(name)

name.splice(-1,2)
console.log(name)


name.forEach(function(item,index){
    console.log(`${index}. ${item}`)
})

for(let i=0;i<name.length;i++){
    console.log(`${i+1}. ${name[i]}`)
}

const notes=[{},
    {
        title:'Dhairya',
        bobdy:'This is body'
    },
    {
        title:'Dhairya2',
        bobdy:'This is body'
    },
    {
        title:'Dhairya3',
        bobdy:'This is body'
    },'Dhairya']

let ob1={}
let ob2=ob1
console.log(ob1===ob2)


console.log(notes.indexOf({}))
console.log(notes.indexOf('Dhairya'))

let result=notes.findIndex(function(notes,index){
    return notes.title==='Dhairya4'
})

console.log(result)

const findNote=function(notes,noteTitle){
    const index=notes.findIndex(function(notes,index){
        return notes.title===noteTitle
    })
    return notes[index]
}

console.log(findNote(notes,'Dhairya4'))

const findNote1=function(notes,noteTitle){
    return notes.find(function(notes,index){
        return notes.title===noteTitle
    })
}
console.log(findNote1(notes,'Dhairya4'))