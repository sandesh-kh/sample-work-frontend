// File: array-example.ts
// 1. Basic Array Declaration
var numbers = [1, 2, 3, 4, 5]; // Declaring an array of numbers
console.log("Basic Array:", numbers); // Output: [1, 2, 3, 4, 5]
// 2. Using Array<T> Syntax
var strings = ["TypeScript", "JavaScript", "Angular"]; // Another way to declare an array
console.log("String Array:", strings); // Output: ["TypeScript", "JavaScript", "Angular"]
// 3. Mixed-Type Array (Using `any`)
var mixedArray = [1, "TypeScript", true]; // Can hold values of any type
console.log("Mixed Array:", mixedArray); // Output: [1, "TypeScript", true]
// 4. Multidimensional Arrays
var matrix = [
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
var fruits = ["Apple", "Banana", "Cherry"];
// Adding elements
fruits.push("Date"); // Adds "Date" to the end
console.log("After push:", fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]
// Removing elements
fruits.pop(); // Removes the last element
console.log("After pop:", fruits); // Output: ["Apple", "Banana", "Cherry"]
// Iterating over an array
fruits.forEach(function (fruit, index) {
    console.log("Fruit at index ".concat(index, ": ").concat(fruit));
});
/*
Output:
Fruit at index 0: Apple
Fruit at index 1: Banana
Fruit at index 2: Cherry
*/
// Mapping an array
var upperFruits = fruits.map(function (fruit) { return fruit.toUpperCase(); }); // Converts all fruit names to uppercase
console.log("Mapped Array:", upperFruits); // Output: ["APPLE", "BANANA", "CHERRY"]
// Filtering an array
var filteredFruits = fruits.filter(function (fruit) { return fruit.startsWith("B"); }); // Filters fruits starting with "B"
console.log("Filtered Array:", filteredFruits); // Output: ["Banana"]
// Reducing an array
var concatenatedFruits = fruits.reduce(function (prev, curr) { return "".concat(prev, ", ").concat(curr); }); // Concatenates all fruit names
console.log("Reduced Array:", concatenatedFruits); // Output: "Apple, Banana, Cherry"
// 6. Array with Objects
var users = [
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
