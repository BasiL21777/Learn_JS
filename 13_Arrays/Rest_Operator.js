// ✅ The rest operator (...) allows you to collect multiple elements into an array
// when destructuring, making it useful for handling dynamic-length data.

let numbers = [1, 2, 3, 4, 5];

// ✅ Using rest operator in destructuring
// Extracts the first and second elements, while the rest are collected into an array
let [first, second, ...rest] = numbers;
console.log(first);  // Output: 1 (First element)
console.log(second); // Output: 2 (Second element)
console.log(rest);   // Output: [3, 4, 5] (Remaining elements)

// ❌ Rest must always be the last element in destructuring
// This will cause a syntax error because JavaScript does not allow
// the rest operator followed by another variable in array destructuring.
// let [...allButLast, last] = numbers; // ❌ SyntaxError

// ✅ Using the spread operator (...) to combine arrays
// The spread operator expands an array's elements into another array
let moreNumbers = [...numbers, 6, 7, 8];
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// ✅ Creating a shallow copy of an array using spread
// This is useful when you need a duplicate array without modifying the original
let numbersCopy = [...numbers];
console.log(numbersCopy); // Output: [1, 2, 3, 4, 5]

// ✅ Using spread to merge multiple arrays
let evenNumbers = [2, 4, 6];
let oddNumbers = [1, 3, 5];
let mergedNumbers = [...oddNumbers, ...evenNumbers];
console.log(mergedNumbers); // Output: [1, 3, 5, 2, 4, 6]

// ✅ Using spread with function arguments
function sum(a, b, c) {
    return a + b + c;
}
let values = [10, 20, 30];
console.log(sum(...values)); // Output: 60 (Expands array into arguments)

// ✅ Converting a string into an array using spread
let word = "Hello";
let letters = [...word];
console.log(letters); // Output: ['H', 'e', 'l', 'l', 'o']

// ✅ Removing duplicates from an array using spread and Set
let duplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(duplicates)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
