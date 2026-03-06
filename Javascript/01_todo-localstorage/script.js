document.addEventListener("DOMContentLoaded", () => {

    const todoInput = document.getElementById('todo-input');
const taskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => {
    renderTask(task);
});

taskButton.addEventListener('click', () => {
    const value = todoInput.value.trim();

    if(value === "") return;

    const newTask = {
        id: Date.now(),
        text: value,
        completed: false
    }

    tasks.push(newTask);
    console.log(tasks);
    saveTasks();
    renderTask(newTask);
    todoInput.value = '';
})

function saveTasks() {
    localStorage.setItem("tasks",JSON.stringify(tasks));   
}


function renderTask(task){
    let li = document.createElement('li');
    li.setAttribute('data-id',task.id);
    if(task.completed)
        li.classList.add('completed');
    li.innerHTML =`
     <span>${task.text}</span>
     <button> Delete </button>    
     `;

    li.addEventListener('click',(e) => {
        if(e.target.tagName === "BUTTON") return
        task.completed = !task.completed;
        li.classList.toggle('completed');
        saveTasks();
    })

    li.querySelector('button').addEventListener('click',(e) => {
        e.stopPropagation();
        tasks = tasks.filter(t => t.id !== task.id)
        li.remove();
        saveTasks();
    })

    todoList.appendChild(li);
}

})