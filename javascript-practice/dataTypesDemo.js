function dataTypesDemo() {
    console.log("=== JavaScript Data Types ===");

    /**
     * PRIMITIVE DATA TYPES
     * These are immutable and stored by value.
     */

    console.log("\n=== Primitive Data Types ===");

    // 1. Number
    let num = 42;
    console.log("Number:", num, "| Type:", typeof num); // Output: 42, "number"

    // 2. String
    let str = "Hello, World!";
    console.log("String:", str, "| Type:", typeof str); // Output: "Hello, World!", "string"

    // 3. Boolean
    let isJavaScriptFun = true;
    console.log("Boolean:", isJavaScriptFun, "| Type:", typeof isJavaScriptFun); // Output: true, "boolean"

    // 4. Undefined
    let notAssigned;
    console.log("Undefined:", notAssigned, "| Type:", typeof notAssigned); // Output: undefined, "undefined"

    // 5. Null (special case)
    let emptyValue = null;
    console.log("Null:", emptyValue, "| Type:", typeof emptyValue); // Output: null, "object" (quirk in JavaScript)

    // 6. Symbol
    let uniqueId = Symbol("id");
    console.log("Symbol:", uniqueId, "| Type:", typeof uniqueId); // Output: Symbol(id), "symbol"

    // 7. BigInt
    let bigNumber = 1234567890123456789012345678901234567890n;
    console.log("BigInt:", bigNumber, "| Type:", typeof bigNumber); // Output: 1234567890123456789012345678901234567890n, "bigint"

    /**
     * NON-PRIMITIVE DATA TYPES
     * These are mutable and stored by reference.
     */

    console.log("\n=== Non-Primitive Data Types ===");

    // 1. Object
    let person = {
        name: "John Doe",
        age: 30,
        isDeveloper: true,
    };
    console.log("Object:", person, "| Type:", typeof person); // Output: Object with properties, "object"

    // 2. Array (special type of object)
    let colors = ["Red", "Green", "Blue"];
    console.log("Array:", colors, "| Type:", typeof colors); // Output: Array elements, "object"

    // 3. Function (also a type of object)
    function greet() {
        return "Hello!";
    }
    console.log("Function:", greet, "| Type:", typeof greet); // Output: Function definition, "function"

    // 4. Date (built-in object)
    let now = new Date();
    console.log("Date:", now, "| Type:", typeof now); // Output: Current date, "object"

    /**
     * DIFFERENCE BETWEEN PRIMITIVE AND NON-PRIMITIVE
     */

    console.log("\n=== Primitive vs Non-Primitive ===");

    // Primitive: Stored by value
    let x = 10;
    let y = x; // y gets a copy of x
    y = 20; // changing y doesn't affect x
    console.log("Primitive (x, y):", x, y); // Output: 10, 20

    // Non-Primitive: Stored by reference
    let obj1 = { name: "Alice" };
    let obj2 = obj1; // obj2 references the same object as obj1
    obj2.name = "Bob"; // changing obj2 also changes obj1
    console.log("Non-Primitive (obj1, obj2):", obj1, obj2); // Output: Both show { name: "Bob" }

    /**
     * TYPE CHECKING WITH typeof
     */

    console.log("\n=== Type Checking ===");

    console.log("typeof 42:", typeof 42); // "number"
    console.log("typeof 'JavaScript':", typeof "JavaScript"); // "string"
    console.log("typeof true:", typeof true); // "boolean"
    console.log("typeof undefined:", typeof undefined); // "undefined"
    console.log("typeof null:", typeof null); // "object" (quirk)
    console.log("typeof Symbol():", typeof Symbol()); // "symbol"
    console.log("typeof {}:", typeof {}); // "object"
    console.log("typeof []:", typeof []); // "object" (arrays are objects)
    console.log("typeof function(){}:", typeof function () {}); // "function"
    console.log("typeof BigInt(123):", typeof BigInt(123)); // "bigint"
}

dataTypesDemo();
