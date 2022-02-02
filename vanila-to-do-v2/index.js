//Selectors
let inputBox = document.querySelector('.inputField input')
let addTodo = document.querySelector('.inputField button')
let todoList = document.querySelector('.todoList')
let clearAllTodos = document.querySelector('.footer button')

//helpers
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
        completed:false,
        item: userInput

    }
    if (userInput && userInput.length) {
       
        todoItems.push(todos)
        localStorage.setItem("Todo", JSON.stringify(todoItems));
        
        addTodo.classList.remove("active");
        inputBox.value='';
    }
    
    
    showTodoList();
    
});
clearAllTodos.addEventListener('click',()=>{
    todoItems=[];
    localStorage.setItem("Todo",JSON.stringify(todoItems))
    showTodoList();
})

//function

function showTodoList() {    
    let getLocalStorageData = localStorage.getItem("Todo");
    
    todoItems = JSON.parse(getLocalStorageData);
   
    todoList.innerHTML='';
    if (todoItems && todoItems.length) {
        clearAllTodos.classList.add("active");
        todoItems.forEach((element, index)=>{
            todoList.innerHTML+=`<li><input class="checkbox__margin" onchange="checkTodoItems(${element.id})" type="checkbox" id="${element.id}"><span>${element.item}</span><span class="icon" onclick="deleteTodos(${element.id})"><i class="fas fa-trash"></i></span></li>`
        })
    }else{
        todoItems=[];
        clearAllTodos.classList.remove("active");
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


function checkTodoItems(todoId) {
    let getLocalStorageData = localStorage.getItem("Todo");
    let temp= document.getElementById(todoId);
    let nextSibling = temp.nextElementSibling;
    todoItems = JSON.parse(getLocalStorageData);
    if (temp.checked) {
        todoItems.filter((el)=>{
            if (el.id === todoId) {
                el.completed=true;
                console.log(el);
                //localStorage.setItem("Todo",JSON.stringify(el))
            }
        })        
        nextSibling.style.textDecoration="line-through"
    }else{
        todoItems.filter((el)=>{
            if (el.id === todoId) {
                el.completed=false;
                console.log(el);
                //localStorage.setItem("Todo",JSON.stringify(el))
            }
        }) 
        nextSibling.style.textDecoration="none"
    }
    
}