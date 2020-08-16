import {getNotes,createNotes,removeNote,sortNotes,updateNote} from './notes'
import {getFilters,setFilters} from './filters'
import {renderNotes} from './views'

renderNotes()

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id=createNotes()
    location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    setFilters({
        searchText:e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    setFilters({
        sortBy:e.target.value
    })
    renderNotes()
})


window.addEventListener('storage',function(e){
    if(e.key==='notes'){
        renderNotes()
    }
})

// console.log(getNotes())
// createNotes()
//removeNote("cc3a804c-a48c-4d9d-93d1-1b374005dc84")

// updateNote("4f793810-3add-475e-9272-baa76c2a4fbf",{
//     title:"Dhairya",
//     body:"Dhairya us best"
// })
// console.log(getNotes())

// console.log(getFilters())
// setFilters({
//     searchText:'Office',
//     sortBy:'byCreated'
// })
// console.log(getFilters())