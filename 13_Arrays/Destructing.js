// Lesson 5

// Array destructuring allows you to extract values from arrays
// into distinct variables in a single statement, making your code cleaner and more readable.

let colors = ['red', 'green', 'blue'];

// ✅ Basic array destructuring
// Extract values from the array into separate variables
let [first, second, third] = colors;
console.log(first);  // Output: 'red'
console.log(second); // Output: 'green'
console.log(third);  // Output: 'blue'

// ✅ Skipping elements during destructuring
// You can use commas to skip unwanted elements
let [primary, , tertiary] = colors;
console.log(primary);  // Output: 'red'  (First element)
console.log(tertiary); // Output: 'blue' (Third element, second is skipped)

// ✅ Using default values
// If the array has fewer elements than variables, you can set default values
let [a, b, c, d = 'yellow'] = colors;
console.log(d); // Output: 'yellow' (default value is used since colors has only 3 elements)

// ✅ Swapping variables using destructuring (no need for a temporary variable)
let x = 1;
let y = 2;
// Swap values in a single line
[x, y] = [y, x];
console.log(x, y); // Output: 2, 1

// ✅ Destructuring with nested arrays
let nestedArray = [1, [2, 3], 4];
// Extract first element, second element as an array, and third element
let [firstNum, [secondNum, thirdNum], fourthNum] = nestedArray;
console.log(firstNum);   // Output: 1
console.log(secondNum);  // Output: 2
console.log(thirdNum);   // Output: 3
console.log(fourthNum);  // Output: 4

// ✅ Using destructuring with function return values
function getCoordinates() {
    return [40.7128, -74.0060]; // Latitude and Longitude
}
let [latitude, longitude] = getCoordinates();
console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// Output: Latitude: 40.7128, Longitude: -74.0060

// ✅ Using the rest parameter to collect remaining elements
let fruits = ['apple', 'banana', 'cherry', 'mango', 'grape'];
let [firstFruit, secondFruit, ...restFruits] = fruits;
console.log(firstFruit);  // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
console.log(restFruits);  // Output: ['cherry', 'mango', 'grape'] (Remaining elements as an array)
