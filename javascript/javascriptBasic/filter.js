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

const filterToDO=function(todos,text){
    return todos.filter(function(todos,index){
        const isTitleMatch=todos.text.includes(text)
        return isTitleMatch        
    })
}

console.log(filterToDO(todos,'Food1'))

const sortTodo=function(todos){
    todos.sort(function(a,b){
        if(a.text>b.text){
            return -1
        }else if(a.text<b.text){
            return 1;
        }else{
            return 0;
        }
    })
}
sortTodo(todos)
console.log(todos)