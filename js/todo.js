const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
let todos = [];
const TODOS_KEY = "todos"
const savedTodos = localStorage.getItem(TODOS_KEY);
const parsedTodos = JSON.parse(savedTodos);

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const parentLi = event.target.parentElement;
    parentLi.remove();
    todos = todos.filter((object) => object.id !== parseInt(parentLi.id));
    saveTodos();
}

function paintTodo(typedNewTodo){
    const li = document.createElement("li");
    li.id = typedNewTodo.id;
    const span = document.createElement("span");
    span.innerText = typedNewTodo.text;
    const DeleteButton = document.createElement("button");
    DeleteButton.innerText = "X";
    li.appendChild(span);
    li.appendChild(DeleteButton);
    todoList.appendChild(li);
    DeleteButton.addEventListener("click",deleteTodo);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObjected = {text: newTodo, id: Date.now()};
    todoInput.value = "";
    todos.push(newTodoObjected);
    paintTodo(newTodoObjected);
    saveTodos();
}

function sayHello(item){
    console.log(`내가 어레이의 오브젝트인 ${item}야.`)
}

todoForm.addEventListener("submit", handleTodoSubmit);

if(savedTodos !== null){
    parsedTodos.forEach(paintTodo);
    todos = parsedTodos;
}
