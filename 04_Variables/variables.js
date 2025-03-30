'use strict'; // Enables strict mode to catch common coding mistakes and prevent unsafe actions.

/*
🚀 Variable Declarations in JavaScript:
--------------------------------------
In JavaScript, we have 3 ways to declare variables: `let`, `const`, and `var`.

1️⃣ `let`  → Used for variables that can be reassigned later.
2️⃣ `const` → Used for variables that should remain constant (cannot be reassigned).
3️⃣ `var`   → The old way (before ES6). It has function-scoped behavior and can lead to bugs.

✅ Best Practice:
   - Use `const` by default for values that should not change.
   - Use `let` only when you know the value will be reassigned.
   - Avoid using `var` due to its unpredictable scope.
*/

// Example using let and const
let age = 20; // Can be reassigned
console.log("Age:", age);
age = 21; // Updating the value
console.log("Updated Age:", age);

const PI = 3.14159; // Constant value (cannot be reassigned)
console.log("PI:", PI);
// PI = 3.15; // ❌ Error: Assignment to a constant variable.

///////////////////////
// 📌 Variable Scope in JavaScript
// ------------------------------
// JavaScript has 3 types of scope:
// 1️⃣ Global Scope  → Accessible anywhere in the script
// 2️⃣ Function Scope → Accessible only within a function
// 3️⃣ Block Scope → Accessible only within a block `{}` (introduced with `let` and `const`)

// Global Variable (Accessible everywhere)
let globalVar = "I'm visible everywhere";

function scopeExample() {
    // Function Scope: Only accessible within this function
    let functionVar = "I'm visible just in this function";

    if (true) {
        // Block Scope: Only accessible inside this block `{}` (if, loops, etc.)
        let blockVar = "I'm visible only in this block";
        console.log(globalVar, functionVar, blockVar); // ✅ Access all
    }

    console.log(globalVar, functionVar); // ✅ Can access global & function scope
    // console.log(blockVar); // ❌ Error: blockVar is not accessible here
}

scopeExample();

console.log(globalVar); // ✅ Can access the global variable
// console.log(functionVar); // ❌ Error: Not accessible outside function
// console.log(blockVar); // ❌ Error: Not accessible outside block

///////////////////////////

// 🔥 Uppercase Constants (for configuration values)
// ---------------------------------------------
// Constants that are known before execution (like configuration values) are usually written in UPPERCASE.
// These values are typically fixed throughout the execution of the program.

const MAX_USERS = 100; // Maximum allowed users in the system
const DEFAULT_LANGUAGE = "English"; // Default language for new users
const COMPANY_NAME = "BESO Corporation"; // Company name (constant)

// Function to simulate user creation
function createUser(username) {
    let currentUsers = 50; // Example: Assume 50 users are currently registered

    if (currentUsers < MAX_USERS) {
        console.log(`✅ Creating user "${username}" with default language: ${DEFAULT_LANGUAGE}`);
    } else {
        console.log(`❌ Cannot create user. ${COMPANY_NAME} has reached the user limit of ${MAX_USERS}.`);
    }
}

createUser('Bassel'); // Example function call

//////////////////////////

// ✅ Summary
// - Use `const` for fixed values and configurations (like PI, MAX_USERS).
// - Use `let` for variables that may change over time.
// - Avoid using `var` as it can cause unexpected behavior due to function-scoped issues.
// - Understand variable scope (global, function, block) to prevent access errors.

