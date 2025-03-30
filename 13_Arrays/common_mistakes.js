'use strict'; // ✅ Enforces better coding practices and helps catch common mistakes

// ✅ Forgetting that these methods modify the original array:
let numbers = [1, 2, 3];
numbers.push(4); // Modifies the original array by adding 4 to the end
console.log(numbers); // Output: [1, 2, 3, 4]

// ❌ If you wanted to add an element without modifying the original array,
// you should create a copy first.
let newNumbers = [...numbers, 5]; // Using spread operator to copy and add
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]
console.log(numbers); // Output: [1, 2, 3, 4] (unchanged)

// ✅ Forgetting to check for an empty array before popping elements
let empty = [];
let item = empty.pop(); // Returns undefined, but might cause issues if not checked
console.log(item); // Output: undefined

// ✅ Safer approach: Check if the array is empty before popping
if (empty.length > 0) {
    item = empty.pop();
    console.log(item);
} else {
    console.log("Array is empty, nothing to pop.");
}

// 🚀 Performance consideration when using shift/unshift in large arrays:
// These methods are **slow** because they shift all elements after the first index.

// ❌ Using `unshift()` inside a loop (inefficient for large arrays)
let array = [];
for (let i = 0; i < 1000; i++) {
    array.unshift(i); // Each unshift operation shifts all elements forward
}
console.log(array.slice(0, 5)); // Output: [999, 998, 997, 996, 995]

// ✅ Instead, use `push()` and reverse() for better performance
let betterArray = [];
for (let i = 0; i < 1000; i++) {
    betterArray.push(i); // More efficient as it appends at the end
}
betterArray.reverse(); // Now the order matches unshift behavior
console.log(betterArray.slice(0, 5)); // Output: [999, 998, 997, 996, 995]

// ✅ Alternative approach: Use a linked list for frequent insertions at the beginning
// JavaScript arrays are not optimized for insertions at the start. If needed, consider a different data structure.

