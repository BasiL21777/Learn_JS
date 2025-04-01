'use static';

/*
📌 **Functions in JavaScript**
Functions help in **encapsulating** code into reusable blocks.

🔹 **Key Concepts:**
- **Encapsulation:** Functions group code into reusable units.
- **Parameter Passing:** Arguments are **copied**, not referenced.
- **Default Parameters (ES6+):** Allows setting **default values**.
- **Missing Arguments:** If **fewer** arguments are provided → `undefined`.
- **Extra Arguments:** If **more** arguments are provided → **ignored**.
*/

/* ---------------------------------- */
/* 🟢 Example 1: Basic Function (No Parameters) */
/* ---------------------------------- */

function sayHello() {
	console.log("Hello, World!");
}

sayHello(); // Outputs: Hello, World!

/* ---------------------------------- */
/* 🔵 Example 2: Function with Parameters */
/* ---------------------------------- */

function greet(name, time) {
	console.log("Good", time, ",", name, "!");
}

let name = "Bassel";
greet(name, "Morning"); // 🔹 Arguments **copied** (not referenced)
console.log(name); // ✅ `name` remains unchanged → "Bassel"

/*
🔹 **Why?**
- JavaScript passes **primitive types (strings, numbers, booleans)** by **value**.
- Changing `name` inside `greet()` **won't affect** the original variable.
*/



/* ---------------------------------- */
/* 🟠 Example 3: Function with Default Parameters (ES6+) */
/* ---------------------------------- */

// 🔹 If `name` is not provided, it defaults to `"Guest"`
function greetWithDefault(name = "Guest") {
	console.log("Hello", name);
}

greetWithDefault();  // Outputs: Hello Guest
greetWithDefault(name);  // Outputs: Hello Bassel



/* ---------------------------------- */
/* 🔴 Example 4: Missing & Extra Arguments */
/* ---------------------------------- */

greet(); // 🚨 `name` & `time` → `undefined`
// Output: Good undefined , undefined !

greet(name, "morning", "will be ignored"); // ✅ Extra argument is ignored
// Output: Good morning , Bassel !

/*
🔹 **Why does this happen?**
- JavaScript **doesn't throw an error** if arguments are missing.
- **Missing parameters** → `undefined`
- **Extra parameters** → Ignored
*/

