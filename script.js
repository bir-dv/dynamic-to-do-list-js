//Wrap our entire script in a DOMContentLoaded event listener.
//This ensures our JavaScript runs after the entire HTML document has been loaded.

document.addEventListener("DOMContentLoaded", function(){

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(taskText => addTask(taskText, false)); // Populate tasks
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(task => {
            tasks.push(task.firstChild.textContent); // Store task text
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

// Function to add a task
function addTask(taskText = null, saveToStorage = true) {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (!taskText) {
        taskText = taskInput.value.trim(); // Get input value
    }

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new task list item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.classList.add('task-item');

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Remove task on button click & update Local Storage
    removeButton.addEventListener('click', function () {
        taskItem.classList.add('fade-out');
        setTimeout(() => {
            taskList.removeChild(taskItem);
            saveTasks(); // Update Local Storage after removal
        }, 300);
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    if (saveToStorage) saveTasks(); // Save tasks to Local Storage

    if (taskInput) taskInput.value = ''; // Clear input field
}


    if (addButton) {
        addButton.addEventListener('click', addTask);
    }

    if (taskInput) {
        taskInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') addTask();
        });
    }
    loadTasks(); // Load tasks when page loads
})