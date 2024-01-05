document.addEventListener('DOMContentLoaded', function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (const taskText of savedTasks) {
        addTask(taskText, false);
    }
});

function addTask() {
    let input = document.getElementById('todo-input');
    let categorySelect = document.getElementById('category-select');
    let prioritySelect = document.getElementById('priority-select');
    let taskText = input.value.trim();
    let taskCategory = categorySelect.value;
    let taskPriority = prioritySelect.value;



    if (taskText) {
        let ul = document.getElementById('todo-list');
        let li = document.createElement('li');
        li.innerHTML = taskText + " - <span class='category'>" + taskCategory + "</span> - <span class='priority'>" + taskPriority + "</span>";

        
        li.innerText = taskText + " [" + taskCategory + "]";
        li.className = taskCategory; // Apply different styles based on category
       
          // Toggle 'completed' class on click
          li.onclick = function() {
            this.classList.toggle('completed');
        }

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            this.parentElement.remove();
        };

        let prioritySpan = document.createElement('span');
        prioritySpan.className = 'priority';
        prioritySpan.innerText = " - " + taskPriority;


        li.appendChild(deleteBtn);
        li.appendChild(prioritySpan); // Append priority after delete button

        ul.appendChild(li);

        input.value = ''; // Clear input field after adding
    } 
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('#todo-list li').forEach(function(taskLi) {
        tasks.push(taskLi.innerText.replace('X', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}