'use strict'; // Enforce strict mode for better error handling

/*
📌 Non-Primitive Data Types (Objects)
   - Unlike primitive types, objects are stored by reference.
   - Objects can hold multiple key-value pairs.
   - Arrays are a type of object.
*/

////////////////////////////////////////
// 📌 Object Data Type
let person = {
    name: "Bassel",
    age: 20,
    isStudent: false
};

console.log(person.name);      // Output: "Bassel"
console.log(typeof person);    // Output: "object"

////////////////////////////////////////
// 📌 Arrays (Also Objects)
let arr = [1, 5, 9];
console.log(typeof arr); // Output: "object"

///////////////////////////////
// 📌 Type Coercion in JavaScript
/*
✅ JavaScript is a loosely typed language.
✅ It allows implicit type conversion (coercion), which can lead to unexpected results.
✅ Always use **strict equality (`===`)** instead of loose equality (`==`) to avoid type coercion issues.
*/

console.log(5 + "5");   // Output: "55" (String concatenation)
console.log("5" - 3);   // Output: 2 (String converted to number)
console.log("5" * "3"); // Output: 15 (String converted to number)
console.log(true + 1);  // Output: 2 (Boolean `true` is treated as `1`)

///////////////////////////////
// 📌 Strict vs. Loose Equality
console.log(5 == "5");  // Output: true  (Loose equality allows type conversion)
console.log(5 === "5"); // Output: false (Strict equality checks value & type)
console.log(null == undefined); // Output: true  (Loose equality considers them equal)
console.log(null === undefined); // Output: false (Strict equality does not)

