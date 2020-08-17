const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

yargs.command({
    command:'add',
    describe:'Add note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(arg){
        notes.addNote(arg.title,arg.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
    },
    handler:function(arg){
        console.log(arg)
        notes.removeNote(arg.title)
    }
})

yargs.command({
    command:'list',
    describe:'list note',
    handler:function(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
    },
    handler:function(arg){
        notes.readNote(arg.title)
    }
})

yargs.parse()

//console.log(yargs.argv)
