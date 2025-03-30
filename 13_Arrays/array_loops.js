'use strict'; // Enforce strict mode for better coding practices

// ========================= Array Looping Methods =========================

/*
🔹 JavaScript provides multiple ways to iterate over an array.
🔹 Choosing the right loop depends on:
   - **Control**: Do you need to modify the index (`i`) manually?
   - **Readability**: Do you prefer a clean syntax?
   - **Performance**: Will this run on a large dataset?

📌 **Types of Loops**
----------------------
1️⃣ **for loop**
   - Full control over the iteration
   - Access to array indexes
   - Can skip elements or modify the index manually

2️⃣ **while loop**
   - Useful when the number of iterations is **unknown** beforehand
   - Can iterate **forward** or **backward**

3️⃣ **for...of loop**
   - Cleaner syntax
   - Works with any iterable object (not just arrays)
   - No need to manage counter variables

⚠️ `for...of` is **not ideal** when you need access to the index.
    → Use `forEach()` or `for loop` instead.
*/

// ========================= Using for loop =========================

let numbers = [1, 2, 3, 4, 5, 6, 7];

// ✅ Forward iteration (0 → n-1)
console.log("➡️ Forward iteration:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

// ✅ Backward iteration (n-1 → 0)
console.log("\n⬅️ Backward iteration:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

// ✅ Skipping elements (every second element)
console.log("\n⏭️ Skipping every second element:");
for (let i = 0; i < numbers.length; i += 2) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

// ✅ Modifying iterator inside the loop
console.log("\n🎛️ Modifying iterator inside loop:");
for (let i = 0; i < numbers.length; ) {
    console.log(`Processing: ${numbers[i]}`);
    i += 3; // Skip every 3rd element
}

// ========================= Using while loop =========================

let colors = ['red', 'green', 'blue'];

// ✅ Forward iteration using while loop
console.log("\n▶️ Forward iteration (while loop):");
let i = 0;
while (i < colors.length) {
    console.log(`Index ${i}: ${colors[i]}`);
    i++;
}

// ✅ Backward iteration using while loop
console.log("\n◀️ Backward iteration (while loop):");
let j = colors.length;
while (j--) { // Decrements `j` each time, stops at 0
    console.log(`Index ${j}: ${colors[j]}`);
}

// ========================= Using for...of loop =========================

numbers = [1, 2, 3, 4, 5];

// ✅ Clean iteration with `for...of`
console.log("\n📌 Using for...of loop:");
for (let number of numbers) {
    console.log(`Value: ${number}`);
}

// ⚠️ Note: `for...of` does not provide access to the index directly.
//    If you need both element and index, use `forEach()` or `for` loop.


// ========================= Performance Tip =========================

// ✅ Caching array length for better performance in large arrays
//    (Prevents recalculating `.length` on each iteration)

let largeArray = new Array(1000000).fill(1);

console.time("Loop with cached length");
let len = largeArray.length;
for (let i = 0; i < len; i++) {
    // Simulated operation
}
console.timeEnd("Loop with cached length");

console.time("Loop with recalculated length");
for (let i = 0; i < largeArray.length; i++) {
    // Simulated operation
}
console.timeEnd("Loop with recalculated length");

/*
⚡ Summary of Performance:
--------------------------
✅ `for loop` is efficient for indexed access.
✅ `while loop` is useful when iterations depend on conditions.
✅ `for...of loop` is best for readability when index access isn't needed.
❌ Avoid recalculating `.length` inside loops for large datasets.

*/

console.log("\n✅ Enhanced JavaScript Array Looping Guide Completed!");
