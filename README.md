# Dynamic Task Dashboard

This project is a vanilla JavaScript implementation of a Task Management Dashboard. It demonstrates deep understanding of DOM manipulation, asynchronous JavaScript, ES6 Classes, and Immutability patterns.

## File Organization
* `index.html`: Contains the required DOM structure and empty containers.
* `styles.css`: Minimal styling to visually differentiate completed and uncompleted tasks.
* `api.js`: Simulates an asynchronous server fetch using Promises and `setTimeout`.
* `taskManager.js`: Contains the `Task` and `TaskManager` classes enforcing immutable state updates and read-only properties.
* `main.js`: Orchestrates the application logic, handles DOM events (without inline handlers), and performs JSON parsing requirements.

## Challenges Faced
The main challenge was ensuring strict immutability within the `TaskManager` class. Using methods like `.map()` and `.filter()` instead of mutating the original array required a shift in logic. Additionally, correctly implementing `Object.defineProperty` for the task ID to make it strictly read-only was an interesting application of object properties. Finally, ensuring the DOM re-rendered correctly in sync with the immutable state updates required careful placement of the `renderTasks()` function inside the event listeners.
