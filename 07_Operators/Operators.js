'use strict';

/*
🌟 **Types of Operators in JavaScript** 🌟

1️⃣ **Arithmetic Operators**: Used for mathematical operations.
2️⃣ **Comparison Operators**: Used to compare values.
3️⃣ **Logical Operators**: Used for boolean operations.
4️⃣ **Assignment Operators**: Used for assigning values to variables.
*/

// 🧮 **1️⃣ Arithmetic Operators**
// These operators are used for basic arithmetic calculations.

let a = 10;
let b = 5;

console.log(a + b);  // Addition: 10 + 5 = 15
console.log(a - b);  // Subtraction: 10 - 5 = 5
console.log(a * b);  // Multiplication: 10 * 5 = 50
console.log(a / b);  // Division: 10 / 5 = 2
console.log(a % b);  // Modulus (remainder): 10 % 5 = 0
console.log(a ** b); // Exponentiation: 10 ** 5 = 100000 (10 raised to the power of 5)

// 💡 **Increment and Decrement Operators**
// These operators increase or decrease a variable by 1.

let c = 5;
console.log(c++);    // Post-increment: Outputs 5, then c becomes 6
console.log(++c);    // Pre-increment: c becomes 7, then outputs 7
console.log(c--);    // Post-decrement: Outputs 7, then c becomes 6
console.log(--c);    // Pre-decrement: c becomes 5, then outputs 5

// 🔗 **String Concatenation Using `+` Operator**
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);  // Outputs: "Hello World"

let result = 2 + 3 * 4;  // Multiplication first due to operator precedence, result = 14
console.log(result);      // Outputs: 14

// Use parentheses to change the order of operations
result = (2 + 3) * 4;  // Addition first, then multiplication, result = 20
console.log(result);     // Outputs: 20

////////////////////////////////////////

/*
🧩 **2️⃣ Comparison Operators**
- Used for comparing values and determining the relationship between them.
- **Loose equality** (`==`) compares values only, while **strict equality** (`===`) compares both value and type.
*/

let x = 5;
let y = '5';

console.log(x == y);   // Loose equality: true (compares value, not type)
console.log(x === y);  // Strict equality: false (compares both value and type)
console.log(x != y);   // Loose inequality: false (compares value only)
console.log(x !== y);  // Strict inequality: true (compares both value and type)

console.log(x > 3);    // Greater than: true
console.log(x < 3);    // Less than: false
console.log(x >= 5);   // Greater than or equal to: true
console.log(x <= 5);   // Less than or equal to: true

////////////////////////////////////////

/*
⚡ **3️⃣ Logical Operators**
- Used for boolean operations and controlling the flow of logic in conditions.

🔹 **AND (`&&`)**: Returns `true` only if both operands are `true`.
🔹 **OR (`||`)**: Returns `true` if at least one operand is `true`.
🔹 **NOT (`!`)**: Inverts the boolean value.

*/

let p = true;
let q = false;

console.log(p && q);  // Logical AND: false (both must be true for AND)
console.log(p || q);  // Logical OR: true (at least one is true for OR)
console.log(!p);      // Logical NOT: false (inverts the value of p)


// ⚡ **Short-circuit evaluation** (important optimization)
console.log(true || anything);  // true (second operand is NOT evaluated since first is true)
let username = null;
let displayName = username || "Guest";
console.log(displayName);  // "Guest"

console.log(false && anything); // false (second operand is NOT evaluated since first is false)
let isLoggedIn = false;
isLoggedIn && console.log("Welcome!"); // Nothing happens (console.log is never executed)


// ⚡ **Truthy and Falsy values in logical operators**
console.log(5 && 2);   // 2 (returns the last truthy value)
console.log(5 && 6);   // 6 (returns the last truthy value)
console.log(0 || 1);   // 1 (returns the first truthy value)
console.log(1 || 5);   // 1 (returns the first truthy value)
console.log(null || 'default');  // 'default' (returns the first truthy value)

let user = { name: "Alice" };
console.log(user && user.name);  // "Alice"

let config = null;
let settings = config || { theme: "dark" };
console.log(settings);  // { theme: "dark" }

////////////////////////////////////////

/*
🔧 **4️⃣ Assignment Operators**
- Used for assigning values to variables and performing operations while assigning.

- Chained assignment allows you to assign the same value to multiple variables at once.
*/

let num = 10; // basic assignment operation

num += 5;  // Same as: num = num + 5
console.log(num);  // 15

num -= 3;  // Same as: num = num - 3
console.log(num);  // 12

num *= 2;  // Same as: num = num * 2
console.log(num);  // 24

num /= 4;  // Same as: num = num / 4
console.log(num);  // 6

num %= 4;  // Same as: num = num % 4
console.log(num);  // 2

// 🔗 **Chained Assignment** (multiple variables assigned in a single line)
let z;
x = y = z = 5;
console.log(x, y, z);  // Outputs: 5 5 5 (all variables are assigned the same value)
