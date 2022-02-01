let inputBox = document.querySelector('.inputField input')
let addTodo = document.querySelector('.inputField button')
let todoList = document.querySelector('.todoList')

inputBox.onkeyup =()=> {
    let userInput = inputBox.value;
    if (userInput.trim() != 0) {
        addTodo.classList.add("active");
    }else{
        addTodo.classList.remove("active");
    }
}
let todoItems=[];
// window.addEventListener('DOMContentLoaded',()=>{
   
// })

if (todoItems && todoItems.length) {
    showTodoList();
}

addTodo.addEventListener('click',()=> {  
    let userInput = inputBox.value;
      
    todoItems.push(userInput)
    
    localStorage.setItem("Todo", JSON.stringify(todoItems));
    inputBox.value='';
    showTodoList();
});


function showTodoList() {    
    let getLocalStorageData = localStorage.getItem("Todo");
    
    todoItems = JSON.parse(getLocalStorageData);
    //console.log(todoItems);
    todoList.innerHTML='';
    if (todoItems && todoItems.length) {
        todoItems.forEach((element, index)=>{
            todoList.innerHTML+=`<li>${element}<span class="icon" onclick="deleteTodos(${index})"><i class="fas fa-trash"></i></span></li>`
        })
    }
   
}
function deleteTodos(index) {
    let getLocalStorageData = localStorage.getItem("Todo");
    
    todoItems = JSON.parse(getLocalStorageData);
    todoItems.splice(index,1);
    localStorage.setItem("Todo", JSON.stringify(todoItems));
    showTodoList();
}
