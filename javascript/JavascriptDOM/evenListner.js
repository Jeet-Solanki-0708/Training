document.querySelector('#add').addEventListener('click',function(e){
    e.target.textContent='This button was clicked'
})

document.querySelector('#remove').addEventListener('click',function(e){
    const plist = document.querySelectorAll('p')
    for(let i=0;i<plist.length;i++){
        plist[i].remove()   
    }
})

// document.querySelector('#search').addEventListener('change',function(e){
//     console.log(e)
// })

// document.querySelector('#search').addEventListener('input',function(e){
//     console.log(e.target.value)
// })
let todos=[{
    text:'aOrder Food1',
    completed:false
},{
    text:'bOrder Food2',
    completed:false
},{
    text:'cOrder Food1',
    completed:true
},{
    text:'dOrder Food4',
    completed:true
}]
const filters={
    searchText:''
}

const renderNotes=function(todos,filters){
    const filterNotes=todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML=''

    filterNotes.forEach(function(notes){
        const toWrite=document.createElement('p')
        toWrite.textContent=notes.text
        document.querySelector('#notes').appendChild(toWrite)
    })
}
// renderNotes(todos,filters)
document.querySelector('#search').addEventListener('input',function(e){
    filters.searchText=e.target.value
    renderNotes(todos,filters)
})

