'use strict';

/************************************************
 🚀 JavaScript Reference: `reduce()` & Tagged Templates
 - Covers string concatenation, formatting, escaping HTML, and styling logs.
 - Provides complete explanations and examples.
************************************************/

// ✅ Understanding `reduce()` for Accumulation
// `reduce(callback, initialValue)`
// - `callback(accumulator, currentValue, index, array)`: Function executed on each element.
// - `initialValue`: Optional; sets the initial `accumulator` value.
// - Returns a single accumulated result.

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num, index, arr) => {
   console.log(`Iteration ${index}: acc = ${acc}, num = ${num}`);
   return acc + num;
}, 0);
console.log("Sum of numbers:", sum);  // Outputs: 15

/////////////////////////////////////////////

/*
🌟 Tagged Templates: Custom String Manipulation
- A function processes template literals before returning a string.
- Function receives:
  1. **strings**: Array of static string literals.
  2. **values**: Array of dynamic values inside `${}`.
*/

// 🔹 Custom Formatting (Highlighting Values)
function format(strings, ...values) {
   console.log("Strings Array:", strings);
   console.log("Values Array:", values);
   return strings.reduce((acc, str, i) => acc + str + (values[i] ? `🔹${values[i]}🔹` : ""), "");
}

let user = "Bassel";
let score = 95;
console.log(format`User: ${user}, Score: ${score}!`);
// Outputs: "User: 🔹Bassel🔹, Score: 🔹95🔹!"

/////////////////////////////////////////////

/*
🔹 Escaping HTML (Prevent XSS)
- Converts `<` to `&lt;` and `>` to `&gt;`
- Helps prevent JavaScript injection attacks.
- Uses `reduce()` to process template literals.
*/
function escapeHTML(strings, ...values) {
   console.log("Raw Strings:", strings);
   console.log("Raw Values:", values);
   return strings.reduce((acc, str, i) => {
       let escaped = values[i]?.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;") || "";
       return acc + str + escaped;
   }, "");
}

let userInput = `<script>alert('Hacked!')</script>`;
console.log(escapeHTML`User Input: ${userInput}`);
// Outputs: "User Input: &lt;script&gt;alert('Hacked!')&lt;/script&gt;"

/////////////////////////////////////////////

/*
🔹 Styling Console Logs (Adding Emojis for Readability)
- Uses `reduce()` to add 🔥 around dynamic values.
*/
function styledLog(strings, ...values) {
   return strings.reduce((acc, str, i) => acc + str + (values[i] ? `🔥${values[i]}🔥` : ""), "");
}

let topic = "Tagged Templates";
let status = "Amazing!";
console.log(styledLog`Learning ${topic} is ${status}`);
// Outputs: "Learning 🔥Tagged Templates🔥 is 🔥Amazing!🔥"

/////////////////////////////////////////////

/*
✅ Summary:
✔ `reduce()` parameters:
  - `callback(accumulator, currentValue, index, array)`
  - `initialValue` (optional)
✔ Tagged templates allow **custom processing** of template literals.
✔ They are useful for:
   - **Formatting text** (adding markers, styling).
   - **Escaping HTML** (preventing XSS attacks).
   - **Styling logs** (e.g., adding emojis for emphasis).
*/
