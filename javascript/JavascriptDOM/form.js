const todo=[]


document.querySelector('#name-form').addEventListener('submit',function(e){
    e.preventDefault()
    
    todo.push({
        name:e.target.elements.firstName.value,
        completed:false
    })
    console.log(todo)
    e.target.elements.firstName.value=''
})

document.querySelector('#check-box').addEventListener('change',function(e){
    console.log(e.target.value)
})

document.querySelector('#check-box').addEventListener('change',function(e){
    console.log(e.target.checked)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})