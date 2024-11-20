/*
Key Points:
String Properties:
.length: To get the length of a string.

Case Conversion:
.toUpperCase() and .toLowerCase(): Change the case of a string.

Trimming and Checking:
.trim(): Removes whitespace.
.includes(), .startsWith(), .endsWith(): Useful for checks.

Substrings:
.slice(), .substring(), .substr(): Extract parts of a string.

Replacement:
.replace() and .replaceAll(): Replace parts of a string.

Splitting and Joining:
.split(): Splits a string into an array.
.concat(): Joins strings.

Padding and Repeating:
.padStart() and .padEnd(): Add padding.
.repeat(): Repeat a string.

Character Operations:
.charAt() and .charCodeAt(): Work with specific characters.

Others:
.toString(): Converts a non-string value to a string.
*/



function stringMethodsDemo() {
    console.log("=== String Methods Demo ===");

    let str = "  Hello, JavaScript World!  ";

    // 1. length: Returns the length of the string
    console.log("Length of string:", str.length); // Output: 30

    // 2. toUpperCase(): Converts the string to uppercase
    console.log("Uppercase:", str.toUpperCase()); // Output: "  HELLO, JAVASCRIPT WORLD!  "

    // 3. toLowerCase(): Converts the string to lowercase
    console.log("Lowercase:", str.toLowerCase()); // Output: "  hello, javascript world!  "

    // 4. trim(): Removes leading and trailing whitespaces
    let trimmedStr = str.trim();
    console.log("Trimmed string:", trimmedStr); // Output: "Hello, JavaScript World!"

    // 5. includes(): Checks if the string contains a specified substring
    console.log("Includes 'JavaScript':", trimmedStr.includes("JavaScript")); // Output: true

    // 6. startsWith(): Checks if the string starts with a specified substring
    console.log("Starts with 'Hello':", trimmedStr.startsWith("Hello")); // Output: true

    // 7. endsWith(): Checks if the string ends with a specified substring
    console.log("Ends with 'World!':", trimmedStr.endsWith("World!")); // Output: true

    // 8. indexOf(): Finds the first occurrence of a substring
    console.log("Index of 'JavaScript':", trimmedStr.indexOf("JavaScript")); // Output: 7

    // 9. lastIndexOf(): Finds the last occurrence of a substring
    console.log("Last index of 'o':", trimmedStr.lastIndexOf("o")); // Output: 20

    // 10. slice(): Extracts a part of the string (start index, end index)
    console.log("Slice (7, 18):", trimmedStr.slice(7, 18)); // Output: "JavaScript"

    // 11. substring(): Extracts a part of the string (start index, end index)
    console.log("Substring (7, 18):", trimmedStr.substring(7, 18)); // Output: "JavaScript"

    // 12. substr(): Extracts a part of the string (start index, length) [deprecated]
    console.log("Substr (7, 10):", trimmedStr.substr(7, 10)); // Output: "JavaScript"

    // 13. replace(): Replaces a substring with another
    console.log(
        "Replace 'World' with 'Universe':",
        trimmedStr.replace("World", "Universe")
    ); // Output: "Hello, JavaScript Universe!"

    // 14. replaceAll(): Replaces all occurrences of a substring
    let repeatStr = "abc abc abc";
    console.log("ReplaceAll 'abc' with 'xyz':", repeatStr.replaceAll("abc", "xyz")); // Output: "xyz xyz xyz"

    // 15. split(): Splits the string into an array based on a delimiter
    console.log("Split by ',':", trimmedStr.split(", ")); // Output: ["Hello", "JavaScript World!"]

    // 16. concat(): Concatenates two or more strings
    let greet = "Hello";
    console.log("Concatenated string:", greet.concat(", World!")); // Output: "Hello, World!"

    // 17. repeat(): Repeats the string n times
    console.log("Repeat 3 times:", greet.repeat(3)); // Output: "HelloHelloHello"

    // 18. charAt(): Returns the character at a specified index
    console.log("Character at index 7:", trimmedStr.charAt(7)); // Output: "J"

    // 19. charCodeAt(): Returns the Unicode of the character at a specified index
    console.log("Unicode of character at index 7:", trimmedStr.charCodeAt(7)); // Output: 74

    // 20. padStart(): Pads the string at the start to reach a specified length
    console.log("Padded start:", greet.padStart(10, "*")); // Output: "*****Hello"

    // 21. padEnd(): Pads the string at the end to reach a specified length
    console.log("Padded end:", greet.padEnd(10, "*")); // Output: "Hello*****"

    // 22. toString(): Converts the value to a string (useful for non-strings)
    let num = 123;
    console.log("Number to string:", num.toString()); // Output: "123"
}

stringMethodsDemo();
