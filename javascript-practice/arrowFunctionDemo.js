/*
// Traditional Function
function add(a, b) {
    return a + b;
}

// Arrow Function
const add = (a, b) => a + b;

*/

console.log("=== Arrow Function Demonstration ===");

/**
 * 1. Basic Syntax
 */
const add = (a, b) => a + b;
console.log("Addition (5 + 3):", add(5, 3)); // Output: 8

const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!

/**
 * 2. Single Parameter
 * Parentheses can be omitted for a single parameter.
 */
const square = x => x * x;
console.log("Square of 4:", square(4)); // Output: 16

/**
 * 3. Multi-line Function Body
 * Use curly braces for functions with multiple statements.
 */
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log("Multiplication (5 * 3):", multiply(5, 3)); // Output: 15

/**
 * 4. Arrow Function and Lexical `this`
 * Arrow functions inherit `this` from their enclosing context.
 */
const person = {
    name: "Alice",
    hobbies: ["Reading", "Cycling", "Cooking"],
    introduce() {
        console.log("\n=== Arrow Function with Lexical this ===");
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`); // Correctly accesses `this.name`
        });
    }
};
person.introduce();

/**
 * 5. No `arguments` Object in Arrow Functions
 */
function traditionalFunction() {
    console.log("\n=== Traditional Function Arguments ===");
    console.log("Arguments:", arguments); // Outputs arguments as an object
}

const arrowFunction = (...args) => {
    console.log("\n=== Arrow Function Arguments ===");
    console.log("Arguments:", args); // Outputs arguments as an array
};

traditionalFunction(1, 2, 3);
arrowFunction(1, 2, 3);

/**
 * 6. Use Case: Filtering and Mapping
 * Arrow functions are often used in array methods.
 */
console.log("\n=== Filtering and Mapping with Arrow Functions ===");
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0); // Implicit return
const doubledNumbers = numbers.map(num => num * 2); // Implicit return

console.log("Even Numbers:", evenNumbers); // Output: [2, 4]
console.log("Doubled Numbers:", doubledNumbers); // Output: [2, 4, 6, 8, 10]
