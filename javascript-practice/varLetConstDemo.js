/* 
Explanation
Scope:
var: Function-scoped, so it’s accessible outside the block in which it's defined.
let and const: Block-scoped, meaning they are accessible only within the block they’re defined in.

Reassignment:
var and let can be reassigned.
const cannot be reassigned once declared.

Hoisting:
var is hoisted with an initial value of undefined.
let and const are also hoisted but are not initialized, leading to a "Temporal Dead Zone" where they cannot 
be accessed before their declaration.
*/


function varLetConstDemo() {
    console.log("Testing 'var' scope:");
    if (true) {
        var x = 10; // var is function-scoped, so it’s accessible outside this block
    }
    console.log("var x:", x); // Output: 10

    console.log("\nTesting 'let' scope:");
    if (true) {
        let y = 20; // let is block-scoped, so it's only accessible within this block
        console.log("Inside block, let y:", y); // Output: 20
    }
    // console.log("Outside block, let y:", y); // Uncaught ReferenceError: y is not defined

    console.log("\nTesting 'const' scope and reassignment:");
    const z = 30; // const is also block-scoped and cannot be reassigned
    console.log("const z:", z); // Output: 30
    // z = 40; // Uncaught TypeError: Assignment to constant variable

    console.log("\nTesting 'var' hoisting:");
    console.log("var a before declaration:", a); // Output: undefined (hoisted)
    var a = 50;
    console.log("var a after declaration:", a); // Output: 50

    console.log("\nTesting 'let' and 'const' hoisting:");
    // console.log("let b before declaration:", b); // Uncaught ReferenceError: Cannot access 'b' before initialization
    let b = 60;
    console.log("let b after declaration:", b); // Output: 60

    // console.log("const c before declaration:", c); // Uncaught ReferenceError: Cannot access 'c' before initialization
    const c = 70;
    console.log("const c after declaration:", c); // Output: 70
}

varLetConstDemo();
