'use strict'; // Enforce strict mode to catch common mistakes

/*
📌 JavaScript Data Types Overview:
   - JavaScript is a dynamically typed language (variables do not have fixed types).
   - The `typeof` operator returns the data type of a value as a string.
   - `typeof null` incorrectly returns `"object"` (this is a historical JavaScript bug).
   - JavaScript has two main categories of data types:
     1️⃣ **Primitive Data Types** (Immutable, stored by value)
     2️⃣ **Non-Primitive (Reference) Data Types** (Objects, stored by reference)

✅ **Primitive Data Types (7 types)**
   1) `Number`     - Represents integers and floating-point numbers.
   2) `String`     - Represents text.
   3) `Boolean`    - Represents `true` or `false`.
   4) `Null`       - Represents an intentional absence of value.
   5) `Undefined`  - Represents a declared variable without an assigned value.
   6) `BigInt`     - Represents large integers (introduced in ES2020).
   7) `Symbol`     - Represents unique identifiers (introduced in ES6).

📌 Non-Primitive (Reference) Data Types:
   - Objects, Arrays, Functions (Covered in `Object_DT.js`).
*/

// 📌 typeof operator: Determines the type of a value.
console.log(typeof 42);          // Output: "number"
console.log(typeof "Bassel");    // Output: "string"
console.log(typeof true);        // Output: "boolean"
console.log(typeof null);        // Output: "object" (JavaScript bug)
console.log(typeof undefined);   // Output: "undefined"

////////////////////////////////////////////////////
// 📌 Number Data Type
let integer = 42;
let float = 3.14;
let negative = -10;
let exponent = 2.998e8; // Scientific notation (2.998 × 10^8)

console.log(typeof integer);  // Output: "number"
console.log(typeof float);    // Output: "number"
console.log(typeof negative); // Output: "number"
console.log(typeof exponent); // Output: "number"

// 📌 Special Numeric Values
console.log(1 / 0);          // Output: Infinity
console.log(-1 / 0);         // Output: -Infinity
console.log("not a number" / 2); // Output: NaN (Not a Number)

///////////////////////////////////////////
// 📌 String Data Type
let single = 'Single quotes work';
let double = "Double quotes work too";
let backticks = `Backticks allow expressions: ${2 + 2}`; // Template literals

console.log(single);   // Output: Single quotes work
console.log(double);   // Output: Double quotes work too
console.log(backticks);// Output: Backticks allow expressions: 4

console.log(typeof single); // Output: "string"

////////////////////////////////////////
// 📌 Boolean Data Type (True or False)
let isGreater = 4 > 1;
console.log(isGreater); // Output: true

let isLess = 4 < 1;
console.log(isLess);    // Output: false

console.log(typeof isGreater); // Output: "boolean"

///////////////////////////////////
// 📌 Undefined Data Type
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined
console.log(typeof undefinedVariable); // Output: "undefined"

/////////////////////////////
// 📌 Null Data Type (Intentional Absence of Value)
let nullVariable = null;
console.log(nullVariable); // Output: null
console.log(typeof nullVariable); // Output: "object" (JavaScript bug)

///////////////////////////
// 📌 BigInt Data Type (For large numbers beyond safe integer limit)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n
console.log(typeof bigNumber); // Output: "bigint"
