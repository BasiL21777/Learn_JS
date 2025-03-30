'use strict';  // Corrected 'use static' to 'use strict' to enforce secure coding practices

/* Objects in JavaScript:
   - Objects are collections of key-value pairs.
   - Keys (properties) are always strings (or symbols).
   - Values can be of any data type (string, number, array, object, function, etc.).
   - Objects are used to store and structure related data and functionalities.

   ## Accessing Object Properties:
   1) Dot notation: obj.key
   2) Bracket notation: obj["key"]
   3) Dynamic property access using a variable: obj[varKey]
      - If a key does not exist, accessing it returns `undefined`.

   ## Modifying Objects:
   1) Adding a new property: obj.newKey = value;
   2) Editing an existing property: obj.key = newValue;
   3) Deleting a property: delete obj.key;
*/

// ========================= Creating Objects =========================

// 1. Object Literal Notation (Most Common)
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

// 2. Creating an Empty Object
let emptyObject = {};  // No properties initially

// 3. Object with Various Data Types (Nested Objects & Arrays)
let person = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming", "cycling"], // Array as a value
  address: {
    city: "New York",
    country: "USA"
  },
  greet: function () {   // Method inside the object
    console.log("Hello, my name is " + this.name);
  }
};

// ========================= Accessing Object Properties =========================

// 1. Dot Notation (Most Common)
console.log(user.name);  // Output: John
console.log(person.age); // Output: 25

// 2. Bracket Notation (Useful for dynamic keys)
console.log(user["age"]);    // Output: 30
console.log(person["hobbies"]);  // Output: ["reading", "gaming", "cycling"]

// 3. Dynamic Property Access
let key = "name";
console.log(user[key]);  // Output: John

// 4. Accessing Nested Objects
console.log(person.address.city);  // Output: New York

// 5. Accessing Non-Existent Property (Returns `undefined`)
console.log(user.height);  // Output: undefined

// ========================= Modifying Objects =========================

// 1. Adding a New Property
user.height = 180;
console.log(user.height);  // Output: 180

// 2. Updating an Existing Property
user.name = "Bassel";
console.log(user.name);  // Output: Bassel

// 3. Deleting a Property
delete user.isAdmin;
console.log(user);  // Output: { name: "Bassel", age: 30, height: 180 }

// ========================= Checking Property Existence =========================

// 1. Using the `in` Operator
console.log("age" in user);      // Output: true
console.log("weight" in user);   // Output: false

// 2. Checking with Undefined (Less Reliable)
console.log(user.weight !== undefined);  // Output: false

// ========================= Iterating Over an Object =========================

// 1. Using `for...in` Loop (Best for iterating over properties)
for (let key in user) {
  console.log(key + ":", user[key]);
}
// Output:
// name: Bassel
// age: 30
// height: 180

// 2. Getting Keys and Values Separately
console.log(Object.keys(user));   // Output: ["name", "age", "height"]
console.log(Object.values(user)); // Output: ["Bassel", 30, 180]

// ========================= Object Methods =========================

// Calling a Method Inside an Object
person.greet();  // Output: Hello, my name is Alice

// ========================= Copying Objects =========================

// 1. Shallow Copy (Only Copies References)
let copiedUser = user;
copiedUser.age = 40;  // Modifies the original object as well!
console.log(user.age);  // Output: 40

// 2. Deep Copy (Creates a New Independent Object)
let newUser = { ...user };  // Spread Operator (Shallow copy)
newUser.name = "David";
console.log(user.name);  // Output: Bassel (Original remains unchanged)
console.log(newUser.name);  // Output: David

// 3. Deep Copy for Nested Objects (Using JSON)
let deepCopyPerson = JSON.parse(JSON.stringify(person));
deepCopyPerson.address.city = "Los Angeles";
console.log(person.address.city);  // Output: New York (Original remains unchanged)
console.log(deepCopyPerson.address.city);  // Output: Los Angeles
