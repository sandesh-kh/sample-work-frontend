function functionContextDemo() {
    console.log("=== Understanding call(), apply(), and bind() ===");

    const person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    };

    const anotherPerson = {
        firstName: "Jane",
        lastName: "Smith",
    };

    /**
     * 1. call(): Invokes a function with a specific `this` value and arguments provided individually.
     */
    console.log("\n=== Using call() ===");

    console.log("Original fullName:", person.fullName()); // Output: "John Doe"

    // Borrow the fullName method for anotherPerson using call()
    console.log(
        "Borrowed fullName with call():",
        person.fullName.call(anotherPerson)
    ); // Output: "Jane Smith"

    const greet = function (greeting, punctuation) {
        return `${greeting}, ${this.firstName} ${this.lastName}${punctuation}`;
    };

    // Using call() with additional arguments
    console.log(
        "Greeting with call():",
        greet.call(person, "Hello", "!")
    ); // Output: "Hello, John Doe!"

    /**
     * 2. apply(): Similar to call(), but arguments are passed as an array.
     */
    console.log("\n=== Using apply() ===");

    // Using apply() with an array of arguments
    console.log(
        "Greeting with apply():",
        greet.apply(person, ["Hi", "!!"])
    ); // Output: "Hi, John Doe!!"

    /**
     * 3. bind(): Returns a new function with the `this` value set permanently.
     */
    console.log("\n=== Using bind() ===");

    // Bind fullName to anotherPerson
    const anotherFullName = person.fullName.bind(anotherPerson);
    console.log("Bound fullName:", anotherFullName()); // Output: "Jane Smith"

    // Bind greet to anotherPerson and provide default arguments
    const boundGreet = greet.bind(anotherPerson, "Welcome");
    console.log("Bound greet:", boundGreet("!")); // Output: "Welcome, Jane Smith!"

    /**
     * Summary of Use Cases:
     * - Use call() or apply() when you want to invoke a function immediately with a specific `this`.
     * - Use bind() when you want to create a new function with `this` pre-bound.
     */
}

functionContextDemo();
