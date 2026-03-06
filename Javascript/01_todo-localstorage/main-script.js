// document.addEventListener("DOMContentLoaded", () => {
// const todoText = document.getElementById("todo-input");
// const addTaskButton = document.getElementById("add-task-btn");
// const todoList = document.getElementById("todo-list");

// let tasks = JSON.parse(localStorage.getItem('tasks')) ||[];

// tasks.forEach(task => {
//     renderTasks(task);
// });

// addTaskButton.addEventListener('click',() => {
//     const taskText = todoText.value.trim();
//     if(taskText === "") return

//     const newTask = {
//         id: Date.now(),
//         text: taskText,
//         completed: false
//     }
//     tasks.push(newTask);
//     console.log(tasks);
//     saveTasks();
//     renderTasks(newTask);
//     todoText.value = "";
// })


// function saveTasks(){
//     localStorage.setItem("tasks",JSON.stringify(tasks));
// }

// function renderTasks(task){
//    const li = document.createElement('li');
//     li.setAttribute('data-id', task.id);
//     if(task.completed)
//         li.classList.add('completed');
//     li.innerHTML =`
//     <span>${task.text}</span>
//     <button> Delete </button>    
//     `;
//     li.addEventListener('click', (e) => {
//         if(e.target.tagName === 'BUTTON') return
//         task.completed = !task.completed;
//         li.classList.toggle("completed")
//         saveTasks();
//     });

//     li.querySelector('button').addEventListener('click', (e) => {
//       e.stopPropagation();  
//       tasks = tasks.filter(t => t.id !==task.id)
//       li.remove();
//       saveTasks();
//     })
//     todoList.appendChild(li);
// }

// })