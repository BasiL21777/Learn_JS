'use strict'; // Enforce strict mode for better coding practices

// ========================= Introduction to Arrays =========================

/*
🔹 Arrays in JavaScript are a type of object (non-primitive).
🔹 They store multiple values (numbers, strings, other arrays, objects, etc.).
🔹 Elements are indexed starting from `0`.
🔹 `.length` property returns the number of elements.
🔹 Arrays are reference types (compared by memory location, not value).
🔹 `Array.isArray(arr)` checks if a variable is an array.
🔹 Be cautious of **sparse arrays** (arrays with gaps), as they can cause unexpected issues.
*/

// ========================= Creating Arrays =========================

let fruits = ["apple", "orange"];
let numbers = [1, 5, 9, 7, 4];
let empty = []; // Empty array
let mix = ["Bassel", 20, true, null, undefined, [1, 8, 9]]; // Mixed data types
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]; // 2D array (Matrix)

console.log(fruits);
console.log(numbers);
console.log(empty);
console.log(mix);
console.log(matrix);

// ========================= Array Length =========================

console.log("Array length:", matrix.length); // 3 (number of rows in the matrix)

// ========================= Accessing Elements =========================

console.log(mix[0]); // "Bassel"
console.log(mix[2]); // true
console.log(mix[-1]); // ❌ undefined (Negative indexing doesn't work)
console.log(mix[mix.length - 1]); // ✅ Last item: [1, 8, 9]

// ========================= Modifying Elements =========================

numbers = [1, 2, 3, 4, 5, 6];
numbers[0] = 10; // Modify the first element
console.log(numbers); // [10, 2, 3, 4, 5, 6]

// ========================= Adding Elements =========================

numbers[6] = 20; // Adds a new element at index 6
console.log(numbers); // [10, 2, 3, 4, 5, 6, 20]

// ❌ Avoid sparse arrays (gaps in arrays)
numbers[8] = 50; // Creates a gap (index 7 is missing)
console.log(numbers); // [10, 2, 3, 4, 5, 6, 20, <empty>, 50]

// ========================= Arrays Are Objects =========================

let arr = ["apple", "banana"];
console.log(typeof arr); // "object"

// ✅ Check if a variable is an array
console.log(Array.isArray(arr)); // true

// ❌ Arrays can have properties like objects, but this is not recommended
arr.myProperty = "test";
console.log(arr.myProperty); // "test" (but don’t use this)

// ✅ Arrays store values at numerical indices
arr = ["a", "b", "c"];
arr["1"] = "d"; // Same as arr[1] = 'd'
console.log(arr); // ["a", "d", "c"]

console.log(arr["01"]); // ❌ undefined (JavaScript does not convert "01" to 1 automatically)
console.log(arr[+"01"]); // ✅ "d" (Unary `+` converts "01" to 1)

// ========================= Changing Array Length =========================

numbers = [1, 2, 3, 4, 5];

// ✅ Shrinking an array (removes elements)
numbers.length = 3;
console.log(numbers); // [1, 2, 3]

// ✅ Expanding an array (adds empty slots)
numbers.length = 5;
console.log(numbers); // [1, 2, 3, empty × 2] (two empty slots)

// ========================= Arrays Are Compared by Reference =========================

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2); // ❌ false (they are stored in different memory locations)

// ✅ Assigning an array to another variable (both point to the same reference)
let arr3 = arr1;
console.log(arr1 === arr3); // ✅ true (same reference)

// ========================= Explanation: Why `arr1 === arr2` is False? =========================

/*
🔹 Arrays are objects, and objects are stored in memory by **reference**.
🔹 Even if two arrays contain the same elements, they are different objects.
🔹 Example:
   arr1 ---> [1, 2, 3] (Memory Address: 0x001)
   arr2 ---> [1, 2, 3] (Memory Address: 0x002)
   Since their memory addresses are different, `arr1 === arr2` returns `false`.
🔹 However, assigning an array to another variable makes them share the same memory:
   arr3 = arr1;
   arr1 ---> [1, 2, 3] (Memory Address: 0x001)
   arr3 ---> Same memory address as arr1 (0x001), so `arr1 === arr3` is `true`.
*/

console.log("\n✅ Enhanced JavaScript Array Guide Completed!");
