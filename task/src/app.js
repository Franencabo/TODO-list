const taskList = document.querySelector('#task-list');
const taskInput = document.querySelector('#input-task');
const addTaskButton = document.querySelector('#add-task-button');
const task = document.querySelector('.task');



document.addEventListener('DOMContentLoaded', getTasks);
addTaskButton.addEventListener('click', addTask);


function getTasks(){
    let listOfTasks;
    if(localStorage.getItem('listOfTasks') === null){
        listOfTasks = [];
    } else {
        listOfTasks = JSON.parse(localStorage.getItem('listOfTasks'));
    }
    listOfTasks.forEach(function(task){
        if(taskInput.value === ''){
            console.log('Add a task');
        }

        const li = document.createElement('li');
        const newTask = taskInput.value;
        let completeInput = `
        <label>
            <input type="checkbox">
            <span class="task">${newTask}</span>
        </label>
        <button class="delete-btn" onclick="deleteTask(this)">Delete Task</button>`
        li.innerHTML = completeInput;
        taskList.appendChild(li);
    })
}


function addTask() {
    if(taskInput.value === ''){
        console.log('Add a task');
    }

    const li = document.createElement('li');
    const newTask = taskInput.value;
    let completeInput = `
        <label>
            <input type="checkbox">
            <span class="task">${newTask}</span>
        </label>
        <button class="delete-btn" onclick="deleteTask(this)">Delete Task</button>`
    li.innerHTML = completeInput;
    taskList.appendChild(li);

  storeTaskInLocalStorage(taskInput.value);
    taskInput.value='';

}

function storeTaskInLocalStorage(task){
    let listOfTasks;
    if(localStorage.getItem('listOfTasks') === null) {
        listOfTasks = [];
    } else {
        listOfTasks = JSON.parse(localStorage.getItem('listOfTasks'));
    }
    listOfTasks.push(task);

    localStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));

}

function deleteTask(obj) {
    obj.parentNode.remove();
}