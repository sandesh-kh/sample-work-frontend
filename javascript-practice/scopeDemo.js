/*
Differences Between var, let, and const in Scope:

Feature	        var	            let	            const

Scope	        Function-scoped	Block-scoped	Block-scoped
Re-declaration	Allowed	        Not allowed	    Not allowed
Reassignment	Allowed	        Allowed	        Not allowed
*/

function scopeDemo() {
    console.log("=== Scope in JavaScript ===");

    /**
     * 1. Global Scope:
     * Variables declared outside of any function or block are in the global scope.
     * These variables can be accessed anywhere in your code.
     */
    console.log("\n=== Global Scope ===");

    var globalVar = "I am a global variable!";
    console.log(globalVar); // Accessible here

    function showGlobalVar() {
        console.log(globalVar); // Accessible inside a function
    }
    showGlobalVar();

    /**
     * 2. Function Scope:
     * Variables declared inside a function using `var`, `let`, or `const` are accessible
     * only within that function.
     */
    console.log("\n=== Function Scope ===");

    function functionScopeExample() {
        var localVar = "I am local to this function!";
        console.log(localVar); // Accessible here
    }

    functionScopeExample();
    // console.log(localVar); // Uncaught ReferenceError: localVar is not defined

    /**
     * 3. Block Scope:
     * Variables declared with `let` or `const` inside a block `{}` are accessible
     * only within that block.
     */
    console.log("\n=== Block Scope ===");

    if (true) {
        let blockVar = "I am inside a block!";
        const blockConst = "I am a constant inside a block!";
        console.log(blockVar); // Accessible here
        console.log(blockConst); // Accessible here
    }

    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
    // console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined

    /**
     * 4. Scope Chain:
     * JavaScript looks for variables in the current scope, and if not found,
     * it searches in the outer scopes (up the chain).
     */
    console.log("\n=== Scope Chain ===");

    var outerVar = "I am in the outer scope!";

    function outerFunction() {
        var innerVar = "I am in the inner scope!";
        console.log(outerVar); // Accessible due to the scope chain
        function innerFunction() {
            console.log(innerVar); // Accessible due to the scope chain
        }
        innerFunction();
    }
    outerFunction();

    /**
     * 5. Lexical Scope:
     * Functions are executed using the scope in which they were defined, not where they are called.
     */
    console.log("\n=== Lexical Scope ===");

    function parentFunction() {
        var parentVar = "I am a variable in the parent function!";
        function childFunction() {
            console.log(parentVar); // Accessible due to lexical scope
        }
        return childFunction;
    }

    const child = parentFunction();
    child(); // Output: "I am a variable in the parent function!"

    /**
     * 6. Global Variables and Pollution:
     * Avoid using global variables excessively to prevent accidental overwrites or conflicts.
     */
    console.log("\n=== Global Variable Pollution ===");

    globalVar = "Accidentally overwritten!";
    console.log(globalVar); // Output: "Accidentally overwritten!"
}

scopeDemo();
