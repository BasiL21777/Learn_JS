'use strict'; // Enforce strict mode for better coding practices

// ========================= Iterating Over Objects =========================

/*
There are multiple ways to iterate over an object's properties:
1️⃣ for...in loop: Iterates over all enumerable properties.
2️⃣ Object.keys(obj): Returns an array of keys.
3️⃣ Object.values(obj): Returns an array of values.
4️⃣ Object.entries(obj): Returns an array of key-value pairs.
*/

// ----------- Using for...in Loop -----------
let user = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("Iterating using for...in loop:");
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

/*
🔹 Outputs:
name: John
age: 30
city: New York
*/

// ----------- Using Object.keys() -----------
let product = {
  name: "Laptop",
  price: 999,
  inStock: true,
};

console.log("\nIterating using Object.keys():");
Object.keys(product).forEach((key) => {
  console.log(`${key}: ${product[key]}`);
});

/*
🔹 Outputs:
name: Laptop
price: 999
inStock: true
*/

// ----------- Using Object.values() -----------
console.log("\nIterating using Object.values():");
Object.values(product).forEach((value) => {
  console.log(value);
});

/*
🔹 Outputs:
Laptop
999
true
*/

// ----------- Using Object.entries() -----------
console.log("\nIterating using Object.entries():");
Object.entries(product).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

/*
🔹 Outputs:
name: Laptop
price: 999
inStock: true
*/

// ========================= Alternative Iteration Methods =========================

/*
🟢 Object.keys(), Object.values(), and Object.entries() return arrays.
🔹 We can use `map()`, `reduce()`, or `forEach()` for custom operations.
*/

// ----------- Using map() to format key-value pairs -----------
let formattedEntries = Object.entries(product).map(([key, value]) => `${key}: ${value}`);
console.log("\nFormatted Entries:", formattedEntries);

/*
🔹 Outputs:
["name: Laptop", "price: 999", "inStock: true"]
*/

// ----------- Using reduce() to create a string summary -----------
let summary = Object.entries(product).reduce((acc, [key, value]) => {
  return acc + `${key}: ${value}\n`;
}, "");

console.log("\nProduct Summary:\n" + summary);

/*
🔹 Outputs:
Product Summary:
name: Laptop
price: 999
inStock: true
*/

// ========================= Summary =========================

/*
✔️ Used for...in loop to iterate over an object's properties.
✔️ Used Object.keys() to iterate over keys.
✔️ Used Object.values() to iterate over values.
✔️ Used Object.entries() to iterate over key-value pairs.
✔️ Used map() and reduce() for advanced object transformations.
*/

console.log("\n✅ Enhanced JavaScript Object Iteration Completed!");
