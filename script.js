//Wrap our entire script in a DOMContentLoaded event listener.
//This ensures our JavaScript runs after the entire HTML document has been loaded.

document.addEventListener("DOMContentLoaded", function(){

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {

        //retrieve and trim the value from the task input.
        const taskText = taskInput.value.trim();

        //check if the taskText is note empty
        if (taskText === "") {
            alert("Pleas enter a task");
            return;
        }

        if (taskText !== "") {

            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
    
            //creat remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
    
            // Assign click event to remove the task
            removeButton.onclick = function () {
                taskList.removeChild(taskItem)
            }
    
            //Append remove button to li
            taskItem.appendChild(removeButton);
    
            //append li to tasklist
            taskList.appendChild(taskItem);
    
            //clear the task input
            taskInput.value = '';
        }


    }

    //ad event listener to addButton that calls addTask when the button is cliked
    if (addButton) {
        addButton.addEventListener('click', addTask); //this is click event for button
    } else {
        console.error('add button not found!');
    }

    if (taskInput) {
        taskInput.addEventListener('keypress', function(event){
            // Check if Enter key is pressed
            if(event.key === 'Enter') {
                addTask();
            }
        });
    }
    else{
        console.error('input field not found!');
    }
})