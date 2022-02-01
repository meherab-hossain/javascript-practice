let inputBox = document.querySelector('.inputField input')
let addTodo = document.querySelector('.inputField button')
let todoList = document.querySelector('.todoList')
let clearAllTodos = document.querySelector('.footer button')

inputBox.onkeyup =()=> {
    let userInput = inputBox.value;
    if (userInput.trim() != 0) {
        addTodo.classList.add("active");    
                
    }else{
        addTodo.classList.remove("active");        
    }
}


window.addEventListener('DOMContentLoaded',()=>{
    showTodoList();    
})

let todoItems=[];



addTodo.addEventListener('click',()=> {  
    let userInput = inputBox.value;
    
    const todos={
        id:Date.now(),
        checked:false,
        item: userInput

    }
    if (userInput && userInput.length) {
       
        todoItems.push(todos)
        localStorage.setItem("Todo", JSON.stringify(todoItems));
        clearAllTodos.classList.add("active");
        addTodo.classList.remove("active");
        inputBox.value='';
    }
    
    
    showTodoList();
    
});


function showTodoList() {    
    let getLocalStorageData = localStorage.getItem("Todo");
    
    todoItems = JSON.parse(getLocalStorageData);
   
    todoList.innerHTML='';
    if (todoItems && todoItems.length) {
        todoItems.forEach((element, index)=>{
            todoList.innerHTML+=`<li>${element.item}<span class="icon" onclick="deleteTodos(${element.id})"><i class="fas fa-trash"></i></span></li>`
        })
    }else{
        todoItems=[];
    }
   
}
function deleteTodos(id) {

    let getLocalStorageData = localStorage.getItem("Todo");
    
    todoItems = JSON.parse(getLocalStorageData);
   
    const filteredTodos= todoItems.filter((element)=>{
        if (element.id !== id ) {
            return element;
        }
    })

    todoItems=filteredTodos;
   
    localStorage.setItem("Todo", JSON.stringify(todoItems));
    showTodoList();
}

clearAllTodos.addEventListener('click',()=>{
    todoItems=[];
    localStorage.setItem("Todo",JSON.stringify(todoItems))
    clearAllTodos.classList.remove("active");
    showTodoList();
})
