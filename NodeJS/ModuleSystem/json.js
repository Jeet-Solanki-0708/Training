const fs=require('fs')

 const book={
     title:"abc",
     author:"abcd"
 }

let bookJson=JSON.stringify(book)
console.log(bookJson)
fs.writeFileSync('jsonFile.json',bookJson)
console.log(JSON.parse(bookJson).title)


const data=fs.readFileSync('jsonFile.json')
const dataJSON=JSON.parse(data.toString())
console.log(data)
console.log(dataJSON.author)

dataJSON.author='Dhairya'

bookJson=JSON.stringify(dataJSON)
console.log(bookJson)
fs.writeFileSync('jsonFile.json',bookJson)
