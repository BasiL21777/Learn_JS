// Lesson 2
'use strict'; // Enforces strict mode for better coding practices

// ========================= Checking if a Property Exists =========================
/*
There are three common ways to check if an object has a property:
1) obj.hasOwnProperty("key") -> Traditional method
2) Object.hasOwn(obj, "key") -> Modern method (ES2022+)
3) "key" in obj -> Checks both own and inherited properties
*/

let user = {
  name: "Bassel",
  age: 20,
  hobbies: ["Sleep", "Eat"]
};

// 1. Using hasOwnProperty()
console.log(user.hasOwnProperty("name"));  // true
console.log(user.hasOwnProperty("height")); // false

// 2. Using Object.hasOwn() (Modern way)
console.log(Object.hasOwn(user, "name"));  // true
console.log(Object.hasOwn(user, "height")); // false

// 3. Using the 'in' operator
console.log("name" in user);  // true
console.log("height" in user); // false

// ========================= Useful Object Methods =========================

console.log(Object.keys(user));   // Output: ["name", "age", "hobbies"]
console.log(Object.values(user)); // Output: ["Bassel", 20, ["Sleep", "Eat"]]
console.log(Object.entries(user)); // Output: [["name", "Bassel"], ["age", 20], ["hobbies", ["Sleep", "Eat"]]]

// ========================= Copying Objects =========================

// Using the spread operator (Shallow Copy)
let user2 = { ...user };
user2.name = "Ali";

console.log(user2); // { name: "Ali", age: 20, hobbies: ["Sleep", "Eat"] }
console.log(user);  // { name: "Bassel", age: 20, hobbies: ["Sleep", "Eat"] } (original remains unchanged)

// Deep Copy (for nested objects)
let deepCopyUser = JSON.parse(JSON.stringify(user));
deepCopyUser.hobbies.push("Coding");

console.log(deepCopyUser.hobbies); // ["Sleep", "Eat", "Coding"]
console.log(user.hobbies); // ["Sleep", "Eat"] (Original is unchanged)

// ========================= Object Methods =========================

/*
- Objects can have functions as values, called methods.
- The `this` keyword refers to the object itself.
*/

user = {
  name: "Bassel",
  age: 20,
  sayHi: function() {
    console.log("Hi,", this.name);
  },
  // Shorthand method syntax (ES6+)
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.age} years old`);
  },
};

user.sayHi();  // Output: Hi, Bassel
user.greet();  // Output: Hello! I'm Bassel and I'm 20 years old

// ========================= Calculator Example =========================

let calculator = {
  value: 0,
  add(number) {
    this.value += number;
  },
  subtract(number) {
    this.value -= number;
  },
  getCurrentValue() {
    return this.value;
  },
};

calculator.add(5);
console.log(calculator.getCurrentValue()); // Output: 5
calculator.subtract(2);
console.log(calculator.getCurrentValue()); // Output: 3

// ========================= Property Shorthand (ES6) =========================

let name = "John";
let age = 30;

// Before ES6
let user1 = {
  name: name,
  age: age,
};

// With ES6 (Shorthand)
let user2 = { name, age }; // Same as { name: name, age: age }

// Method Shorthand (ES6+)
user1 = {
  sayHi: function () {
    console.log("Hi!");
  },
};

user2 = {
  sayHi() {
    console.log("Hi!"); // No need for 'function' keyword
  },
};

user2.sayHi(); // Output: Hi!

// ========================= Computed Property Names =========================

/*
- Use square brackets [] to define dynamic property names.
- Can use variables, string concatenation, or function names dynamically.
*/

let propName = "age";
let prefix = "user";

user = {
  [propName]: 30, // Dynamic property name
  [prefix + "Id"]: 1, // Computed property name
  ["get" + propName.toUpperCase()]() {
    return this[propName]; // Computed method name
  },
};

console.log(user.age);      // Output: 30
console.log(user.userId);   // Output: 1
console.log(user.getAGE()); // Output: 30

// ========================= Merging Objects =========================

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Using Object.assign()
let merged1 = Object.assign({}, obj1, obj2);
console.log(merged1); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Using Spread Operator
let merged2 = { ...obj1, ...obj2 };
console.log(merged2); // Output: { a: 1, b: 2, c: 3, d: 4 }

// ========================= Object Destructuring =========================

let person = { firstName: "Alice", lastName: "Doe", age: 25 };

// Extracting values into variables
let { firstName, lastName, age: userAge } = person;
console.log(firstName, lastName, userAge); // Output: Alice Doe 25

// ========================= Summary =========================
/*
✔️ Checked if a property exists using hasOwnProperty(), Object.hasOwn(), and 'in' operator.
✔️ Used Object methods: keys(), values(), and entries().
✔️ Copied objects using the spread operator and JSON methods.
✔️ Created object methods and used `this` for referencing properties.
✔️ Used shorthand syntax for properties and methods.
✔️ Created dynamic property names with computed properties.
✔️ Merged objects using Object.assign() and the spread operator.
✔️ Extracted object values using destructuring.
*/

console.log("✅ Enhanced JavaScript object handling completed!");
