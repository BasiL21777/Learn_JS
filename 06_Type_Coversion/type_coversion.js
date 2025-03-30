'use strict'; // Enforce strict mode to prevent common mistakes

/*
📌 JavaScript Type Conversion
--------------------------------
JavaScript provides two types of type conversion:
1️⃣ **Explicit Conversion (Type Casting)** 🛠️
   - Done manually using built-in methods.
   - Converts values into `String`, `Number`, or `Boolean`.

2️⃣ **Implicit Conversion (Type Coercion)** 🔄
   - Done automatically by JavaScript.
   - Happens in operations involving different data types.
*/

// -------------------------------------------
// 🟢 1) Explicit Conversion (Type Casting)
// -------------------------------------------

/*
🔹 Converting Values to String
   - Use `String(value)`, `.toString()`, or Template Literals `${value}`
*/

console.log(String(123));       // "123"   (Number → String)
console.log(String(true));      // "true"  (Boolean → String)
console.log(String(null));      // "null"  (Null → String)
console.log(String(undefined)); // "undefined" (Undefined → String)

console.log((456).toString());  // "456"   (Number → String using .toString())
console.log(false.toString());  // "false" (Boolean → String)

console.log(`${789}`);          // "789"   (Using Template Literals)
console.log(`${false}`);        // "false"

// -------------------------------------------

/*
🔹 Converting Values to Number
   - Use `Number(value)`, `parseInt(value)`, `parseFloat(value)`, or `+value`
*/

console.log(Number("123"));   // 123     (String → Number)
console.log(Number(""));      // 0       (Empty String → Number)
console.log(Number("  "));    // 0       (Whitespace String → Number)
console.log(Number(true));    // 1       (Boolean → Number)
console.log(Number(false));   // 0       (Boolean → Number)
console.log(Number(null));    // 0       (Null → Number)
console.log(Number(undefined)); // NaN   (Undefined → Number)
console.log(Number("hello")); // NaN     (Invalid String → Number)

// `parseInt()` extracts integer part, `parseFloat()` keeps decimal values
console.log(parseInt("123.9"));  // 123  (Extracts integer)
console.log(parseFloat("3.14")); // 3.14 (Keeps decimal value)

// Using `+` operator for quick conversion
console.log(+"125");  // 125   (String → Number)
console.log(+true);   // 1     (Boolean → Number)
console.log(+false);  // 0

// -------------------------------------------

/*
🔹 Converting Values to Boolean
   - Use `Boolean(value)`
   - Truthy values → `true`, Falsy values → `false`
*/

console.log(Boolean(1));       // true  (Non-zero Number → true)
console.log(Boolean(0));       // false (Zero → false)
console.log(Boolean("hello")); // true  (Non-empty String → true)
console.log(Boolean(""));      // false (Empty String → false)
console.log(Boolean(null));    // false (Null → false)
console.log(Boolean(undefined)); // false (Undefined → false)
console.log(Boolean(NaN));     // false (NaN → false)
console.log(Boolean([]));      // true  (Empty Array → true)
console.log(Boolean({}));      // true  (Empty Object → true)

// -------------------------------------------
// 🔴 2) Implicit Conversion (Type Coercion)
// -------------------------------------------

/*
🔹 JavaScript automatically converts data types when:
   - Using `+` operator with a string → Converts everything to a string.
   - Using other math operators (`-`, `*`, `/`) → Converts to numbers.
   - Using `==` (Loose Equality) → Performs type coercion.
   - Using `===` (Strict Equality) → NO type coercion (Recommended).
*/

// 🔸 Implicit String Concatenation (String takes priority)
console.log("3" + 4);        // "34"  (Number → String)
console.log(99 + "3");        // "993"  (Number → String)
console.log("3" + true);     // "3true" (Boolean → String)

// 🔸 Implicit Numeric Conversion (Numbers take priority)
console.log("6" - 2);        // 4   (String → Number)
console.log("6" * "2");      // 12  (Both Strings → Numbers)

// 🔸 Comparison Operators (`==` vs `===`)
console.log("5" == 5);       // true  (Loose Equality - Type Coercion)
console.log("5" === 5);      // false (Strict Equality - No Coercion)
console.log(false == 0);     // true  (Boolean → Number comparison)
console.log(false === 0);    // false (Strict - Different Types)
console.log(null == undefined); // true  (Both are treated as equal)
console.log(null === undefined); // false (Strict - Different Types)

// -------------------------------------------

/*
🛠️ Best Practices:
✅ Prefer **explicit conversion** to avoid confusion.
✅ Always use **`===` strict equality** instead of `==` to avoid unexpected results.
✅ Be aware of JavaScript's automatic type coercion to avoid bugs.
*/

