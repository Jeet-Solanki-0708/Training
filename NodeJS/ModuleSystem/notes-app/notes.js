const fs=require('fs')

const getNotes=()=>{
    return "Your notes"
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    //console.log(notes)
    //console.log(title)
    const duplicateTitle=notes.filter((note) => {
        return note.title===title
    })
    if(duplicateTitle.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes)
        console.log("New Note Added")
    }else{
        console.log("Duplicate Note")
    }
}

const saveNote=(notes)=>{
    const data=JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}

const listNotes=()=>{
    const notes=loadNotes()
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const loadNotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json')
        return JSON.parse(databuffer.toString())
    }catch(e){
        return []
    }
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const noteFound=notes.filter((note) => {
        return note.title!==title
    })
    if(noteFound.length<notes){
        saveNote(noteFound)
        console.log("Note Removed")
    }else{
        console.log("No Data Found")
    }
}

const readNote=(title)=>{
    const notes=loadNotes()
    const noteFound=notes.find((note)=> note.title===title)
    if(noteFound){
        console.log(noteFound.title)
        console.log(noteFound.body)
    }else{
        console.log("No such title")
    }
}


module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}