/*
Difference Between async and await in JavaScript
The async and await keywords are used together to handle asynchronous operations in a cleaner and more readable way than traditional promise chains. They simplify working with promises.

Key Differences:
Aspect	        async	                                                await
Definition	    Declares an asynchronous function.	                    Pauses execution of an async function until a promise resolves.
Usage	        Placed before a function declaration or expression.	    Used inside async functions.
Purpose	        Ensures that the function always returns a promise.	    Waits for a promise to resolve before proceeding.
Return Value	Automatically wraps the returned value in a promise.	Unwraps the resolved value of a promise.
Context	        Can only be used to define a function as async.	        Can only be used within an async function.
*/

console.log("=== Understanding async and await ===");

/**
 * 1. Using async to Define an Asynchronous Function
 */
async function fetchData() {
    return "Data fetched!"; // Implicitly returns a resolved promise
}

fetchData()
    .then((data) => console.log(data)) // Output: "Data fetched!"
    .catch((error) => console.error(error));

/**
 * 2. Using await to Wait for a Promise
 * The await keyword pauses execution until the promise resolves.
 */
async function processAsyncTask() {
    console.log("\n=== Using await ===");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Async Task Complete!"), 2000);
    });

    console.log("Before await...");
    const result = await promise; // Wait for the promise to resolve
    console.log("After await...");
    console.log("Result:", result); // Output: "Async Task Complete!"
}

processAsyncTask();

/**
 * 3. Combining async and await with Error Handling
 */
async function fetchWithErrorHandling() {
    console.log("\n=== Error Handling with async/await ===");

    const faultyPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject("Something went wrong!"), 1500);
    });

    try {
        const result = await faultyPromise; // Will throw an error
        console.log("Result:", result);
    } catch (error) {
        console.error("Caught Error:", error); // Output: "Caught Error: Something went wrong!"
    }
}

fetchWithErrorHandling();

/**
 * 4. Sequential vs Concurrent Execution
 */

// Sequential Execution (await pauses each time)
async function sequentialExecution() {
    console.log("\n=== Sequential Execution ===");

    function delay(ms) {
        return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
    }

    const task1 = await delay(1000); // Wait 1 second
    console.log(`Task 1 completed in ${task1}ms`);
    const task2 = await delay(2000); // Wait 2 seconds
    console.log(`Task 2 completed in ${task2}ms`);
    console.log("All tasks completed sequentially!");
}

// Concurrent Execution (start all tasks simultaneously)
async function concurrentExecution() {
    console.log("\n=== Concurrent Execution ===");

    function delay(ms) {
        return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
    }

    const task1 = delay(1000); // Start immediately
    const task2 = delay(2000); // Start immediately

    const result1 = await task1; // Wait for task 1
    console.log(`Task 1 completed in ${result1}ms`);
    const result2 = await task2; // Wait for task 2
    console.log(`Task 2 completed in ${result2}ms`);
    console.log("All tasks completed concurrently!");
}

sequentialExecution().then(concurrentExecution);

/**
 * 5. async Always Returns a Promise
 */
async function explicitPromise() {
    console.log("\n=== async Always Returns a Promise ===");

    return "Explicit Promise Value!";
}

explicitPromise()
    .then((value) => console.log(value)) // Output: "Explicit Promise Value!"
    .catch((error) => console.error(error));
