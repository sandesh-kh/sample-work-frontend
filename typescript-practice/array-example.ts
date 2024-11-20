// File: array-example.ts

// 1. Basic Array Declaration
let numbers: number[] = [1, 2, 3, 4, 5]; // Declaring an array of numbers
console.log("Basic Array:", numbers); // Output: [1, 2, 3, 4, 5]

// 2. Using Array<T> Syntax
let strings: Array<string> = ["TypeScript", "JavaScript", "Angular"]; // Another way to declare an array
console.log("String Array:", strings); // Output: ["TypeScript", "JavaScript", "Angular"]

// 3. Mixed-Type Array (Using `any`)
let mixedArray: any[] = [1, "TypeScript", true]; // Can hold values of any type
console.log("Mixed Array:", mixedArray); // Output: [1, "TypeScript", true]

// 4. Multidimensional Arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // A 2D array
console.log("2D Array (Matrix):", matrix);
/*
Output:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
*/

// 5. Common Array Methods
let fruits: string[] = ["Apple", "Banana", "Cherry"];

// Adding elements
fruits.push("Date"); // Adds "Date" to the end
console.log("After push:", fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// Removing elements
fruits.pop(); // Removes the last element
console.log("After pop:", fruits); // Output: ["Apple", "Banana", "Cherry"]

// Iterating over an array
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});
/*
Output:
Fruit at index 0: Apple
Fruit at index 1: Banana
Fruit at index 2: Cherry
*/

// Mapping an array
let upperFruits = fruits.map((fruit) => fruit.toUpperCase()); // Converts all fruit names to uppercase
console.log("Mapped Array:", upperFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

// Filtering an array
let filteredFruits = fruits.filter((fruit) => fruit.startsWith("B")); // Filters fruits starting with "B"
console.log("Filtered Array:", filteredFruits); // Output: ["Banana"]

// Reducing an array
let concatenatedFruits = fruits.reduce((prev, curr) => `${prev}, ${curr}`); // Concatenates all fruit names
console.log("Reduced Array:", concatenatedFruits); // Output: "Apple, Banana, Cherry"

// 6. Array with Objects
let users: { id: number; name: string }[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Adding a new user
users.push({ id: 3, name: "Charlie" });
console.log("Users Array:", users);
/*
Output:
[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
]
*/
