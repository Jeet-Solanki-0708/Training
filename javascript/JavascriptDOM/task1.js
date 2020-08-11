// const p=document.querySelectorAll('p')

// for(let i=0;i<p.length;i++){
//     if(p[i].textContent.toLowerCase().includes('the')){
//         p[i].remove()
//     }
// }
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

const newParagraph=document.createElement('p')
newParagraph.textContent='This is added using createElement'
document.querySelector('body').appendChild(newParagraph)


const findTask=todos.filter(function(todos){
    return !todos.completed
})

const summary=document.createElement('h1')
summary.textContent=`You need to complete ${findTask.length}`
document.querySelector('body').appendChild(summary)

for(let i=0;i<todos.length;i++){
    const toAdd=document.createElement('p')
    toAdd.textContent=`${todos[i].text}`
    document.querySelector('body').appendChild(toAdd)
}


document.querySelector('button').addEventListener('click',function(e){
    e.target.textContent='Unclick';
    console.log('Clicked')
})