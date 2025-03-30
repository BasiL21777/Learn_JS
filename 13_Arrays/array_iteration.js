'use strict';

/*
📌 Array Iteration Methods in JavaScript
-----------------------------------------
JavaScript provides several methods to iterate over arrays, each with unique behavior and use cases.
Many of these methods take a callback function as an argument, where:

(element, index, array) => { ... }

- `element` → The current item in the array (mandatory).
- `index` → The index of the current item (optional).
- `array` → The original array (optional).

💡 Methods Overview:
-------------------
1️⃣ `forEach()` → Executes a function for each array element.
   - Does not return anything (always returns `undefined`).
   - Cannot break or stop execution (runs for all elements).
   - Modifies the original array only if explicitly changed in the callback.

2️⃣ `map()` → Creates a new array by applying a function to each element.
   - Returns a new transformed array.
   - Does not modify the original array.
   - Used for data transformation (e.g., adjusting prices, formatting strings).

3️⃣ `filter()` → Returns a new array containing elements that satisfy a condition.
   - Does not modify the original array.
   - Includes elements only if the callback function returns `true`.

4️⃣ `reduce()` → Reduces the array to a single value (e.g., sum, product, object, array).
   - Takes an initial value (optional).
   - Does not modify the original array.

5️⃣ `find()` → Returns the first element that matches a condition.
   - Stops as soon as a match is found.
   - Useful for finding a unique item in an array.

6️⃣ `findIndex()` → Returns the index of the first matching element.
   - Returns `-1` if no match is found.
   - Useful when you need the position of an element.

7️⃣ `some()` → Checks if *at least one* element meets a condition.
   - Stops processing as soon as a match is found.
   - Useful for validation (e.g., "Is there at least one discounted item?").

8️⃣ `every()` → Checks if *all* elements meet a condition.
   - Stops processing as soon as it finds a non-matching element.
   - Useful for form validation (e.g., "Are all inputs valid?").

✅ Since most of these methods return a new array, they can be *chained together* for efficient operations!
*/

// Example dataset
let numbers = [1, 2, 3, 4, 5];

// 📌 1) forEach() - Simple iteration
console.log("🟢 forEach()");
numbers.forEach((number, index) => {
    console.log(`Number at index ${index} is ${number}`);
});

// ⚠️ Modifying the original array inside forEach
numbers.forEach((number, index, array) => {
    array[index] = number * 2;
});
console.log("Modified array:", numbers); // [2, 4, 6, 8, 10]

console.log("-----------------------------------------------------");

// 📌 2) map() - Creates a new array
console.log("🟢 map()");
let prices = [100, 50, 90, 12, 160];

// Adding 20% tax to each price
let taxAdded = prices.map(price => price * 1.2);
console.log("Prices with tax:", taxAdded); // [120, 60, 108, 14.4, 192]

// Doubling each price
let doublePrices = prices.map(price => price * 2);
console.log("Doubled prices:", doublePrices); // [200, 100, 180, 24, 320]

console.log("-----------------------------------------------------");

// 📌 3) filter() - Returns a new array with only elements that pass the condition
console.log("🟢 filter()");
let nums = [1, 2, 3, 4, 5, 6, 7];

// Keeping only even numbers
let evenNums = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNums); // [2, 4, 6]

// Keeping only odd numbers
let oddNums = nums.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNums); // [1, 3, 5, 7]

console.log("-----------------------------------------------------");

// 📌 4) reduce() - Reduces an array to a single value
console.log("🟢 reduce()");

// Sum of all numbers
let sum = nums.reduce((prev, curr) => prev + curr, 0);
console.log("Sum:", sum); // 28

// Product of all numbers
let product = nums.reduce((prev, curr) => prev * curr, 1);
console.log("Product:", product); // 5040

console.log("-----------------------------------------------------");

// 📌 5) find() - Returns the first element that matches the condition
console.log("🟢 find()");
numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];

// Finding the first even number
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven); // 4

// Finding a user by ID
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

let user = users.find(user => user.id === 2);
console.log("Found user:", user.name); // Jane

console.log("-----------------------------------------------------");

// 📌 6) findIndex() - Returns index of first matching element
console.log("🟢 findIndex()");
numbers = [1, 2, 3, 4, 5];

let index = numbers.findIndex(number => number > 3);
console.log("Index of first number > 3:", index); // 3

console.log("-----------------------------------------------------");

// 📌 7) some() - Checks if at least one element meets the condition
console.log("🟢 some()");
numbers = [1, 2, 3, 4, 5];

let hasEven = numbers.some(number => number % 2 === 0);
console.log("Has at least one even number?", hasEven); // true

console.log("-----------------------------------------------------");

// 📌 8) every() - Checks if *all* elements meet the condition
console.log("🟢 every()");
numbers = [2, 4, 6, 8, 10];

let allEven = numbers.every(number => number % 2 === 0);
console.log("Are all numbers even?", allEven); // true

console.log("-----------------------------------------------------");

// 📌 9) Chaining Methods - Combining multiple operations
console.log("🟢 Method Chaining");

let products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 599, inStock: true },
    { id: 3, name: "Tablet", price: 399, inStock: false },
    { id: 4, name: "Watch", price: 199, inStock: true }
];

// Finding the first in-stock product under $500
let affordableProduct = products
    .filter(product => product.inStock)  // Keep only in-stock items
    .find(product => product.price <= 500); // Find first affordable product

console.log("First affordable in-stock product:", affordableProduct);

// Checking if all in-stock products are under $1000
let allAffordable = products
    .filter(product => product.inStock)
    .every(product => product.price <= 1000);

console.log("Are all in-stock products affordable?", allAffordable); // true

