/*
== (Equality):
Compares two values for equality after performing type coercion (automatic type conversion if types differ).
Example: '5' == 5 is true because the string '5' is coerced into a number before comparison.

=== (Strict Equality):
Compares two values for equality without performing type coercion.
The values must be of the same type and value to return true.
Example: '5' === 5 is false because the types (string and number) are different.

*/

function equalityOperatorsDemo() {
  console.log("=== Examples of `==` and `===` ===");

  console.log("'5' == 5:", "5" == 5); // true (type coercion)
  console.log("'5' === 5:", "5" === 5); // false (different types)

  console.log("0 == false:", 0 == false); // true (type coercion: 0 becomes false)
  console.log("0 === false:", 0 === false); // false (different types)

  console.log("null == undefined:", null == undefined); // true (special case in JavaScript)
  console.log("null === undefined:", null === undefined); // false (different types)

  console.log("' ' == 0:", "" == 0); // true (empty string coerced to 0)
  console.log("' ' === 0:", "" === 0); // false (different types)

  console.log("10 > 5:", 10 > 5); // true
  console.log("10 <= 5:", 10 <= 5); // false
  console.log("'100' > 50:", "100" > 50); // true (string '100' coerced to number)

  console.log("true && false:", true && false); // false
  console.log("true || false:", true || false); // true
  console.log("!true:", !true); // false

  // Nullish Coalescing (??)
  //Returns the right-hand operand if the left-hand operand is null or undefined.

  let name = null;
  console.log("name ?? 'Guest':", name ?? "Guest"); // 'Guest'

  // Ternary Operator
  // A shorthand for if...else.

  let age = 18;
  console.log("age >= 18 ? 'Adult' : 'Minor':", age >= 18 ? "Adult" : "Minor"); // 'Adult'
}

equalityOperatorsDemo();
