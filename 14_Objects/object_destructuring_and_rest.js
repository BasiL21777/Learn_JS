// Lesson 4
'use strict'; // Enforce strict mode for better coding practices

// ========================= Object Destructuring =========================

/*
🔹 Destructuring allows us to extract values from an object into variables.
🔹 Helps make code cleaner and more readable.
*/

// ----------- Basic Destructuring -----------
let user = {
  name: "John",
  age: 30,
  city: "New York",
};

let { name, age } = user;
console.log(name); // "John"
console.log(age);  // 30

// ----------- Destructuring with Different Variable Names -----------
let { name: userName, age: userAge } = user;

console.log(userName); // "John"
console.log(userAge);  // 30

// ----------- Destructuring with Default Values -----------
/*
🔹 If the property is missing, the default value is used.
🔹 If the property exists, the actual value is used.
*/
let { country = "USA" } = user;
console.log(country); // "USA" (default value used)

// ----------- Using Rest Operator with Destructuring -----------
/*
🔹 Extract some properties and store the rest in a separate object.
🔹 Useful when handling large objects and only needing specific properties.
*/
let { name: name2, age: age2, ...rest } = user;

console.log(name2); // "John"
console.log(age2);  // 30
console.log(rest);  // { city: "New York" } (remaining properties)

// ========================= Best Practices for Working with Objects =========================

/*
✅ Use consistent property access methods (prefer dot notation when possible)
✅ Check for property existence before accessing values to avoid errors
✅ Use meaningful property names to improve readability
✅ Use Object destructuring when working with multiple properties
✅ Be careful with object mutations (changes can affect the original object)
*/

console.log("\n✅ Enhanced Object Destructuring Completed!");
