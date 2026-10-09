// Simulate a server request using Promise and setTimeout
const fetchTasks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Raw data exactly as requested in the specifications[cite: 4]
            const rawData = [
                { id: 1, title: "Study JavaScript", completed: false },
                { id: 2, title: "Practice DOM", completed: true },
                { id: 3, title: "Read Async Patterns", completed: false }
            ];
            
            // Resolve the promise with the raw data
            resolve(rawData);
            
            // Note: In a real scenario, reject() could be called here on error
        }, 1500); // 1500ms delay requirement[cite: 4]
    });
};
