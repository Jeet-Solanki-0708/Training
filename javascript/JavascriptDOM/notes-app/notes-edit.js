const noteId=location.hash.substring(1)
let notes=getSavedNotes()
const titleEl=document.querySelector('#note-title')
const bodyEl=document.querySelector('#note-body')
const removeEl=document.querySelector('#remove-note')
const dateElement=document.querySelector('#last-edited')

let note=notes.find(function(note){
    return note.id===noteId
})

if(note===undefined){
    location.assign('index.html')
}

titleEl.value=note.title
bodyEl.value=note.body
dateElement.textContent=generateLastEdited(note.updatedAt)

titleEl.addEventListener('input',function(e){
    note.title=e.target.value
    note.updatedAt=moment().valueOf()
    dateElement.textContent=generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyEl.addEventListener('input',function(e){
    note.body=e.target.value
    note.updatedAt=moment().valueOf()
    dateElement.textContent=generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeEl.addEventListener('click',function(e){
    removeNote(note.id) 
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage',function(e){
    if(e.key==='notes'){
        notes=JSON.parse(e.newValue)
        let note=notes.find(function(note){
            return note.id===noteId
        })
        
        if(note===undefined){
            location.assign('index.html')
        }
        
        titleEl.value=note.title
        bodyEl.value=note.body
        dateElement.textContent=generateLastEdited(note.updatedAt)
    }
})