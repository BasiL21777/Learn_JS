'use strict';

/*
🚀 JavaScript String Concatenation Methods 🚀

✅ We have **3** main ways to concatenate strings:

1️⃣ **Using the `+` operator** (Traditional Approach)
   - If one of the operands is a **string**, the other operand(s) will be **implicitly converted** into a string.
   - Works with numbers, booleans, and other data types.

2️⃣ **Using `.concat()` method**
   - Can concatenate multiple strings at once.
   - Returns a **new** string (does not modify the original string).

3️⃣ **Using Template Literals (ES6 - Recommended)**
   - Uses backticks (`` ` ` `).
   - More **flexible** than other methods.
   - Supports **multi-line strings**.
   - Allows embedding **expressions** inside placeholders `${}`.
   - Used with **tagged templates** for advanced string manipulation.

🔹 **Performance Tip:** If you need to concatenate a large number of strings,
   consider using **arrays + `.join()` method** instead of `+` or `.concat()` for better efficiency.
*/

// 🌟 1️⃣ Using the `+` Operator (Traditional Concatenation)
let firstName = "John";
let lastName = "Doe";

// Simple concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);  // Outputs: John Doe

// Concatenation with different data types (Implicit Type Conversion)
let age = 30;
let introduction = "My name is " + fullName + " and I am " + age + " years old.";
console.log(introduction);
// Outputs: My name is John Doe and I am 30 years old.

// Using `+=` for appending strings
let message = "Hello";
message += " World"; // Equivalent to: message = message + " World";
console.log(message);  // Outputs: Hello World

/////////////////////////////////////////////

/*
🌟 2️⃣ Using `.concat()` Method
- Allows concatenation of multiple strings.
- Returns a **new** string (doesn't modify the original).
*/

let str1 = "Hello";
let str2 = "World";
let str3 = "!";

// Concatenation using `.concat()`
let result = str1.concat(" ", str2, str3);
console.log(result);  // Outputs: Hello World!

// `.concat()` can take multiple arguments
let greeting = "".concat("Hi", " ", "there", "!");
console.log(greeting);  // Outputs: Hi there!

/////////////////////////////////////////////

/*
🌟 3️⃣ Using Template Literals (ES6 - Recommended)
- Uses backticks `` ` ` `` instead of quotes.
- Supports **multi-line strings**.
- Allows embedding **expressions** inside `${}`.
*/

let name = "Alice";
let age2 = 28;

// Simple Template Literal
let greeting2 = `Hello, ${name}!`;
console.log(greeting2);  // Outputs: Hello, Alice!

// Embedding expressions inside template literals
let message2 = `${name} is ${age2} years old.`;
console.log(message2);  // Outputs: Alice is 28 years old.

// Multi-line string using Template Literals
let multiLine = `
  This is a multi-line
  string using
  template literals.
`;
console.log(multiLine);
// Preserves line breaks exactly as written

// More complex expressions inside template literals
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// Outputs: Fifteen is 15 and not 20.

/////////////////////////////////////////////

/*
🌟 4️⃣ Tagged Templates (Advanced Feature)
- Used for **custom string processing**.
- The function receives **two arguments**:
  1. An **array of string literals**.
  2. An **array of values** passed inside `${}`.
- Useful for escaping characters, formatting text, localization, etc.
*/

function myTag(strings, ...values) {
	console.log("Strings Array:", strings);
	console.log("Values Array:", values);
	return "🔹 Custom Processed String";
}

let customResult = myTag`Hello ${name}, Your Age is: ${age2} years old.`;
console.log(customResult);
// Outputs: 🔹 Custom Processed String


function format(strings, ... values) {
   return strings.reduce((acc, str, i) => acc + str + (values[i] ? `🔹${values[i]}🔹` : ""), "");
}

let user = "Bassel";
let score = 95;

console.log(format`User: ${user}, Score: ${score} !`);
Outputs: "User: 🔹Bassel🔹, Score: 🔹95🔹"

function escapeHTML(strings, ...values) {
   return strings.reduce((acc, str, i) => {
       let escaped = values[i]?.replace(/</g, "&lt;").replace(/>/g, "&gt;") || "";
       return acc + str + escaped;
   }, "");
}

let userInput = `<script>alert('Hacked!')</script>`;
console.log(escapeHTML`User Input: ${userInput}`);
// Outputs: "User Input: &lt;script&gt;alert('Hacked!')&lt;/script&gt;"



