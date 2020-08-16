import moment from 'moment'
import {getFilters} from './filters'
import {sortNotes,getNotes} from './notes'

const generateNoteDOM = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    button.textContent='x'
    noteEl.appendChild(button)
    button.addEventListener('click',function(){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })
        if(note.title.length>0){
            textEl.textContent = note.title
        }
        else{
            textEl.textContent = 'Unnamed'
        }
        textEl.setAttribute('href',`edit.html#${note.id}`)
        noteEl.appendChild(textEl)
        return noteEl
}

const renderNotes = function () {
    const noteEl = document.querySelector('#notes')
    const filters=getFilters() 
    const notes=sortNotes(filters.sortBy)

    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl=generateNoteDOM(note)
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

const initializeEditPage = (noteId) => {
    const titleEl=document.querySelector('#note-title')
const bodyEl=document.querySelector('#note-body')
const dateElement=document.querySelector('#last-edited')
    let notes = getNotes()
    let note = notes.find(function (note) {
        return note.id === noteId
    })

    if (note === undefined) {
        location.assign('index.html')
    }

    titleEl.value = note.title
    bodyEl.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
}

const generateLastEdited=function(timestamp){
    return `Last edited ${moment(note.updatedAt).fromNow()}`
}

export {generateNoteDOM,renderNotes,generateLastEdited,initializeEditPage}