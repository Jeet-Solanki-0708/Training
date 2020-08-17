const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const { argv } = require('yargs')

//yargs.version('1.1.0')

//const command=process.argv[2]
console.log(process.argv)
console.log(yargs.argv)
// if(command==='add'){
//     console.log('Add')
// }else if(command==='remove'){
//     console.log('remove')
// }


// const add=require('./notes.js')

// console.log(chalk.green('Hello World'))
// console.log(chalk.green.bold('Hello World'))
// console.log(chalk.green.bold.inverse('Hello World'))
// console.log(validator.isEmail('shah@gmail.com'))
// console.log(validator.isURL('npmjscompackagevalidator'))
// console.log(validator.isURL('npmjs.com/package/validator'))
// console.log(add(2,4))