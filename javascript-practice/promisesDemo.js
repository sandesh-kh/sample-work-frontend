/*
Promises in JavaScript
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows for better management of asynchronous code, avoiding callback hell and improving code readability.

Key States of a Promise:
Pending: The initial state; the operation has not yet completed.
Fulfilled: The operation was successful, and the promise has resolved with a value.
Rejected: The operation failed, and the promise was rejected with a reason (error).

Benefits of Promises:
Chaining multiple asynchronous operations.
Centralized error handling using .catch().
Improved readability compared to callbacks.

Real-World Use Cases:
Fetching Data from APIs:
Make HTTP requests using fetch() or libraries like Axios.
File Operations:
Reading or writing files asynchronously in Node.js.
Timers and Animations:
Use setTimeout or custom animations.
Concurrent Operations:
Process multiple API requests simultaneously using Promise.all().

*/

function promisesDemo() {
    console.log("=== Understanding Promises ===");

    /**
     * 1. Creating a Promise:
     * Use the `Promise` constructor to create a new promise.
     */
    console.log("\n=== Creating a Promise ===");

    const promise = new Promise((resolve, reject) => {
        const success = true; // Change to `false` to simulate failure
        if (success) {
            resolve("Promise fulfilled successfully!");
        } else {
            reject("Promise rejected due to an error.");
        }
    });

    // Handling the promise
    promise
        .then((result) => {
            console.log(result); // Output if fulfilled: "Promise fulfilled successfully!"
        })
        .catch((error) => {
            console.error(error); // Output if rejected: "Promise rejected due to an error."
        });

    /**
     * 2. Chaining Promises:
     * Use `.then()` to chain multiple asynchronous operations.
     */
    console.log("\n=== Chaining Promises ===");

    function asyncTask(step) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Step ${step} completed.`);
                resolve(step);
            }, 1000);
        });
    }

    asyncTask(1)
        .then(() => asyncTask(2))
        .then(() => asyncTask(3))
        .then(() => console.log("All steps completed!"));

    // Output:
    // Step 1 completed.
    // Step 2 completed.
    // Step 3 completed.
    // All steps completed!

    /**
     * 3. Error Handling:
     * Use `.catch()` to handle errors in promises.
     */
    console.log("\n=== Error Handling ===");

    const faultyTask = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong!");
        }, 1000);
    });

    faultyTask
        .then((result) => {
            console.log(result); // Won't execute
        })
        .catch((error) => {
            console.error("Error:", error); // Output: "Error: Something went wrong!"
        });

    /**
     * 4. Combining Multiple Promises:
     * Use `Promise.all()` or `Promise.race()` for concurrent operations.
     */
    console.log("\n=== Combining Multiple Promises ===");

    const task1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 done!"), 1000));
    const task2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 done!"), 2000));
    const task3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 done!"), 1500));

    // Wait for all promises to resolve
    Promise.all([task1, task2, task3])
        .then((results) => {
            console.log("All tasks completed:", results);
            // Output: ["Task 1 done!", "Task 2 done!", "Task 3 done!"]
        })
        .catch((error) => {
            console.error("Error in one of the tasks:", error);
        });

    // Wait for the first promise to resolve
    Promise.race([task1, task2, task3])
        .then((result) => {
            console.log("First task completed:", result);
            // Output: "Task 1 done!" (first to finish)
        })
        .catch((error) => {
            console.error("Error in the race:", error);
        });

    /**
     * 5. Using Async/Await with Promises:
     * Async/await syntax makes working with promises cleaner and easier.
     */
    console.log("\n=== Async/Await with Promises ===");

    async function runTasks() {
        try {
            const step1 = await asyncTask(1);
            const step2 = await asyncTask(2);
            const step3 = await asyncTask(3);
            console.log("Async/Await: All steps completed!");
        } catch (error) {
            console.error("Error in async/await:", error);
        }
    }

    runTasks();
    // Output:
    // Step 1 completed.
    // Step 2 completed.
    // Step 3 completed.
    // Async/Await: All steps completed!
}

promisesDemo();

