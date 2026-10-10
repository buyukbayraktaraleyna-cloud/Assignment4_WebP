class Task {
    constructor(id, title, completed) {
        // Make id read-only and immutable[cite: 3]
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            enumerable: true,
            configurable: false
        });
        this.title = title;
        this.completed = completed;
    }

    // Returns a completely new Task object with flipped status[cite: 3]
    toggle() {
        return new Task(this.id, this.title, !this.completed);
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Replaces the tasks array immutably[cite: 3]
    setTasks(tasks) {
        this.tasks = [...tasks];
    }

    // Adds a task immutably (returns a new array)[cite: 3]
    addTask(task) {
        this.tasks = [...this.tasks, task];
    }

    // Removes a task immutably using filter[cite: 3]
    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    // Toggles a task's status immutably using map and Task.toggle()[cite: 3]
    toggleTask(taskId) {
        this.tasks = this.tasks.map(task => 
            task.id === taskId ? task.toggle() : task
        );
    }
}
