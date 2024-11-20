/*
A callback is a function passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used in asynchronous operations like API calls, file handling, or event listeners.

Key Points:
Synchronous Callbacks:
Executed immediately within the same context of the function.
Asynchronous Callbacks:
Executed after a time delay or once an asynchronous operation is complete.

Real-World Uses of Callbacks:
Event handling (addEventListener).
Asynchronous file I/O (e.g., fs.readFile in Node.js).
HTTP requests with callback-based APIs.
Timers (setTimeout, setInterval).

*/

function callbacksDemo() {
    console.log("=== Understanding Callbacks ===");

    /**
     * 1. Synchronous Callback
     * A callback function executed immediately within the calling function.
     */
    console.log("\n=== Synchronous Callback ===");

    function greet(name, callback) {
        console.log("Hello, " + name);
        callback(); // Call the callback function
    }

    function sayGoodbye() {
        console.log("Goodbye!");
    }

    greet("Alice", sayGoodbye);
    // Output:
    // Hello, Alice
    // Goodbye!

    /**
     * 2. Asynchronous Callback
     * A callback function executed after an asynchronous operation, such as a timeout.
     */
    console.log("\n=== Asynchronous Callback ===");

    function fetchData(callback) {
        console.log("Fetching data...");

        setTimeout(() => {
            const data = { id: 1, name: "Sample Data" };
            callback(data); // Call the callback function with the data
        }, 2000); // Simulate 2-second delay
    }

    function processData(data) {
        console.log("Processing data:", data);
    }

    fetchData(processData);
    // Output:
    // Fetching data...
    // (2-second delay)
    // Processing data: { id: 1, name: "Sample Data" }

    /**
     * 3. Error Handling in Callbacks
     * Use a standard pattern to handle errors in callbacks.
     */
    console.log("\n=== Error Handling in Callbacks ===");

    function performOperation(input, callback) {
        setTimeout(() => {
            if (input < 0) {
                callback("Error: Input cannot be negative", null); // Pass error as the first argument
            } else {
                callback(null, input * 2); // Pass result as the second argument
            }
        }, 1000);
    }

    function handleResult(error, result) {
        if (error) {
            console.error(error);
        } else {
            console.log("Result:", result);
        }
    }

    performOperation(-5, handleResult); // Output: Error: Input cannot be negative
    performOperation(10, handleResult); // Output: Result: 20

    /**
     * 4. Nested Callbacks (Callback Hell)
     * Using multiple callbacks can lead to deeply nested code, known as "callback hell."
     */
    console.log("\n=== Nested Callbacks (Callback Hell) ===");

    function step1(callback) {
        console.log("Step 1 completed.");
        callback();
    }

    function step2(callback) {
        console.log("Step 2 completed.");
        callback();
    }

    function step3(callback) {
        console.log("Step 3 completed.");
        callback();
    }

    step1(() => {
        step2(() => {
            step3(() => {
                console.log("All steps completed!");
            });
        });
    });
    // Output:
    // Step 1 completed.
    // Step 2 completed.
    // Step 3 completed.
    // All steps completed!

    /**
     * 5. Avoiding Callback Hell
     * Use Promises or Async/Await to improve readability and structure.
     */
    console.log("\n=== Avoiding Callback Hell with Promises ===");

    function performTask(step) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Step ${step} completed.`);
                resolve();
            }, 1000);
        });
    }

    performTask(1)
        .then(() => performTask(2))
        .then(() => performTask(3))
        .then(() => console.log("All steps completed using Promises!"));

    // Output:
    // Step 1 completed.
    // Step 2 completed.
    // Step 3 completed.
    // All steps completed using Promises!
}

callbacksDemo();
