/*
TypeScript is a strongly typed, object-oriented, compiled language developed by Microsoft. 
It is a superset of JavaScript, meaning it builds upon JavaScript by adding optional static types, 
interfaces, and modern features like decorators. TypeScript code is transpiled into plain JavaScript, 
making it compatible with any environment that supports JavaScript.

Key Features of TypeScript
Static Typing: Variables, function parameters, and return types can have predefined types.
Type Inference: TypeScript can infer the type of a variable based on its value.
Interfaces: Define contracts for objects.
Classes and Modules: Support for ES6+ class-based object-oriented programming.
Tooling: Rich editor support with auto-completion, refactoring, and error-checking.

*/

// Step 1: Define a type for user details
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  // Step 2: Function to greet a user
  function greetUser(user: User): string {
    return `Hello, ${user.name}! Your email is ${user.email}`;
  }
  
  // Step 3: Create a User object
  const user: User = {
    id: 1,
    name: 'Sandesh',
    email: 'sandesh@example.com',
  };
  
  // Step 4: Call the function and log the result
  console.log(greetUser(user));
  
  // Step 5: Example of static typing with a function
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  console.log(addNumbers(5, 10)); // Output: 15
  
  // Step 6: Demonstrating an interface for objects
  interface Product {
    id: number;
    name: string;
    price: number;
    available: boolean;
  }
  
  const product: Product = {
    id: 101,
    name: 'Laptop',
    price: 1200,
    available: true,
  };
  
  console.log(`Product: ${product.name}, Price: $${product.price}`);
  