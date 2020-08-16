import {initializeEditPage,generateLastEdited} from './views'
import {updateNote,removeNote} from './notes'

const noteId=location.hash.substring(1)

const titleEl=document.querySelector('#note-title')
const bodyEl=document.querySelector('#note-body')
const removeEl=document.querySelector('#remove-note')
const dateElement=document.querySelector('#last-edited')

initializeEditPage(noteId)

titleEl.addEventListener('input',function(e){
    const note=updateNote(noteId,{
        title:e.target.value
    })
    dateElement.textContent=generateLastEdited(note.updatedAt)
})

bodyEl.addEventListener('input',function(e){
    const note=updateNote(noteId,{
        body:e.target.value
    })
    dateElement.textContent=generateLastEdited(note.updatedAt)
})

removeEl.addEventListener('click',function(e){
    removeNote(noteId) 
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage',function(e){
    if(e.key==='notes'){
        initializeEditPage(noteId)
    }
})