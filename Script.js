// Dom elements setup
const taskInput = document.getElementById('todo-input');
const taskList = document.getElementById('todo-list');

// Add a real formatted date string on load
const dateDisplay = document.getElementById('date-display');
const options = { weekday: 'long', month: 'short', day: 'numeric' };
dateDisplay.innerText = new Date().toLocaleDateString('en-US', options);

// Listen for "Enter" key press inside input box
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskContent = taskInput.value.trim();
    
    // Safety check for empty entries
    if (taskContent === '') {
        alert("Please enter a task description!");
        return;
    }

    // 1. Create wrapper list item
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    // Toggle completed state on item body click
    li.addEventListener('click', function(e) {
        // Prevent toggling if user was trying to hit the delete button
        if (e.target.classList.contains('delete-btn')) return;
        li.classList.toggle('completed');
    });

    // 2. Create internal text frame
    const textSpan = document.createElement('span');
    textSpan.className = 'todo-text';
    textSpan.innerText = taskContent;

    // 3. Create delete trash button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = '🗑️';
    
    // Action script to kill list node elements
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // 4. Assemble the item layout together and append to structural list
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input bar field for next entry loop
    taskInput.value = '';
    taskInput.focus();
}
