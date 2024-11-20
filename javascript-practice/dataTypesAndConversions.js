/*
Explanation
Data Types:
JavaScript has several primitive data types: number, string, boolean, undefined, null, symbol, and bigint.
Each of these types is displayed with typeof to show their unique identifiers in JavaScript.

Type Conversion:
Explicit Conversion: We use functions like String(), Number(), and Boolean() to explicitly convert values.

Implicit Conversion (Coercion): JavaScript sometimes converts types automatically (e.g., when adding a number 
to a string, the number is converted to a string).

Special Cases:
null shows up as an "object" when using typeof, which is a historical quirk in JavaScript.

Non-numeric strings converted to numbers produce NaN (Not-a-Number).
*/
function dataTypesAndConversions() {
    console.log("=== Data Types ===");

    // Number
    let num = 42;
    console.log("Number:", num, "| Type:", typeof num); // Output: 42, "number"

    // String
    let str = "Hello, world!";
    console.log("String:", str, "| Type:", typeof str); // Output: "Hello, world!", "string"

    // Boolean
    let bool = true;
    console.log("Boolean:", bool, "| Type:", typeof bool); // Output: true, "boolean"

    // Undefined
    let undef;
    console.log("Undefined:", undef, "| Type:", typeof undef); // Output: undefined, "undefined"

    // Null (special case)
    let nul = null;
    console.log("Null:", nul, "| Type:", typeof nul); // Output: null, "object" (quirk in JavaScript)

    // Symbol
    let sym = Symbol("unique");
    console.log("Symbol:", sym, "| Type:", typeof sym); // Output: Symbol(unique), "symbol"

    // BigInt
    let bigInt = 123456789012345678901234567890n;
    console.log("BigInt:", bigInt, "| Type:", typeof bigInt); // Output: 123456789012345678901234567890n, "bigint"

    console.log("\n=== Type Conversion ===");

    // Number to String
    let numToStr = String(num);
    console.log("Number to String:", numToStr, "| Type:", typeof numToStr); // "42", "string"

    // String to Number
    let strToNum = Number("123");
    console.log("String to Number:", strToNum, "| Type:", typeof strToNum); // 123, "number"

    // Boolean to String
    let boolToStr = String(bool);
    console.log("Boolean to String:", boolToStr, "| Type:", typeof boolToStr); // "true", "string"

    // String to Boolean
    let strToBool = Boolean("hello");
    console.log("String to Boolean:", strToBool, "| Type:", typeof strToBool); // true, "boolean" (non-empty string)

    // Number to Boolean
    let numToBool = Boolean(0);
    console.log("Number (0) to Boolean:", numToBool, "| Type:", typeof numToBool); // false, "boolean"

    let numToBool2 = Boolean(123);
    console.log("Number (123) to Boolean:", numToBool2, "| Type:", typeof numToBool2); // true, "boolean"

    // Implicit Type Conversion (Coercion)
    console.log("\n=== Implicit Type Conversion (Coercion) ===");

    // Number + String
    let result1 = 5 + "10";
    console.log("5 + '10' =", result1, "| Type:", typeof result1); // "510", "string"

    // Boolean + Number
    let result2 = true + 1;
    console.log("true + 1 =", result2, "| Type:", typeof result2); // 2, "number" (true coerced to 1)

    // String to Number (using + operator)
    let result3 = +"123";
    console.log("+'123' =", result3, "| Type:", typeof result3); // 123, "number"

    // Converting non-number string to Number (results in NaN)
    let result4 = Number("abc");
    console.log("Number('abc') =", result4, "| Type:", typeof result4); // NaN, "number"
}

dataTypesAndConversions();
