// Initialize the TaskManager
const taskManager = new TaskManager();

// Select DOM elements
const loadTasksBtn = document.getElementById('loadTasksBtn');
const statusMessage = document.getElementById('statusMessage');
const taskListContainer = document.getElementById('taskList');

// Fetch and handle tasks
const loadTasks = async () => {
    try {
        // Show loading state[cite: 5]
        statusMessage.textContent = "Loading tasks...";
        
        // Fetch raw data using async/await[cite: 5]
        const rawData = await fetchTasks();
        
        // JSON Requirement: Convert to string, then parse back[cite: 7]
        const jsonString = JSON.stringify(rawData);
        const parsedData = JSON.parse(jsonString);
        
        // Convert parsed data into Task instances[cite: 7]
        const taskInstances = parsedData.map(task => 
            new Task(task.id, task.title, task.completed)
        );
        
        // Store in TaskManager
        taskManager.setTasks(taskInstances);
        
        // Clear status message[cite: 5]
        statusMessage.textContent = "";
        
        // Render will be called here (implemented in next step)
        renderTasks();
        
    } catch (error) {
        // Error handling[cite: 7]
        statusMessage.textContent = "Error fetching tasks. Please try again.";
        console.error(error);
    }
};

// Event listener for the Load button
loadTasksBtn.addEventListener('click', loadTasks);

// Render tasks to the DOM
const renderTasks = () => {
    // Clear the current list
    taskListContainer.innerHTML = '';

    // Iterate over tasks and create DOM elements
    taskManager.tasks.forEach(task => {
        // Create main task div[cite: 5]
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        if (task.completed) {
            taskDiv.classList.add('completed');
        }

        // Create span for title[cite: 5]
        const titleSpan = document.createElement('span');
        titleSpan.textContent = task.title;

        // Create Toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Toggle';
        // Attach event listener instead of inline HTML[cite: 6]
        toggleBtn.addEventListener('click', () => {
            taskManager.toggleTask(task.id);
            renderTasks(); // Re-render after state change[cite: 6]
        });

        // Create Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskManager.removeTask(task.id);
            renderTasks(); // Re-render after state change[cite: 6]
        });

        // Append elements to the task div[cite: 6]
        taskDiv.appendChild(titleSpan);
        taskDiv.appendChild(toggleBtn);
        taskDiv.appendChild(deleteBtn);

        // Append task div to the container[cite: 6]
        taskListContainer.appendChild(taskDiv);
    });
};