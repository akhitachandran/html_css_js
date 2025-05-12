document.addEventListener("DOMContentLoaded",()=>{
  const todoInput = document.getElementById("todo-input");
  const addTask = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

addTask.addEventListener('click',()=>{
  const taskText = todoInput.value.trim();
  if(taskText === "")
    return "";
  

  }
})
})