'use static';

/*
📌 **Function Expressions & Arrow Functions in JavaScript**

### 🟢 1) Function Expression
- An **anonymous function** (function with no name) assigned to a **variable**.
- The function **can be called using the variable name**.
- **NOT hoisted**: Must be **defined before calling**.

### 🔵 2) Arrow Function (ES6)
- A **shorter syntax** for function expressions.
- Ideal for **simple functions** that return a value.
- Arrow functions **handle `this` differently** compared to regular functions.

🚨 **Key Differences**
- **Function Declarations are hoisted** → Can be called **before** their definition.
- **Function Expressions & Arrow Functions are NOT hoisted** → Must be **defined first**.
*/

/* ---------------------------------- */
/* 🟢 Example 1: Function Expression (Anonymous Function) */
/* ---------------------------------- */

let greet = function(name) {
    console.log("Hello", name);
};

greet("Bassel"); // Outputs: Hello Bassel

/*
🔹 **What happens here?**
- The function is **stored in a variable** (`greet`).
- We can call `greet()` just like a normal function.
- The function **doesn't have a name** (anonymous function).
*/

///////////////////////

/* ---------------------------------- */
/* 🔵 Example 2: Arrow Function (ES6) */
/* ---------------------------------- */

// ✅ Standard Arrow Function Syntax
let greetArrow = (name) => {
    console.log("Hello, " + name);
};

greetArrow("Bob"); // Outputs: Hello, Bob

/*
🔹 **Why use arrow functions?**
- Shorter and more readable syntax.
- No need for the `function` keyword.
*/

///////////////////////

/* ---------------------------------- */
/* 🟠 Example 3: Concise Arrow Function (Implicit Return) */
/* ---------------------------------- */

// ✅ single-line function (No `return` or `{}`)
let multi = (x,y) => x * y;

console.log(multi(5,2)); // Outputs: 25

/*
🔹 **How does this work?**
- If the function **only returns a value**, we can **omit `{}`** and `return`.
- More compact than writing `return x * y;`.
*/


hello = name => console.log("Hello "+name);
hello("Bassel");


