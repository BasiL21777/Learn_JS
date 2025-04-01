// Lesson 2
'use strict'; // Enforce strict mode for better coding practices

// ========================= Array Methods (Mutating) =========================

/*
🔹 JavaScript provides methods to add/remove elements in an array.
🔹 These methods **modify the original array** (destructive operations).

📌 **Push & Pop (Fast: O(1))**
   1️⃣ push()  → Add element(s) to the **end** of the array, returns new length.
   2️⃣ pop()   → Remove the **last** element, returns the removed element.

📌 **Unshift & Shift (Slower: O(n))**
   3️⃣ unshift() → Add element(s) to the **beginning**, returns new length.
   4️⃣ shift()   → Remove the **first** element, returns the removed element.

⚠️ `shift()` and `unshift()` are **slower** than `push()` and `pop()`
   → They need to **reindex** all elements after modifying the first element.
*/

// ========================= Using push() =========================

let fruits = ['apple', 'banana'];

// ✅ push() adds elements to the end of the array
let newLength = fruits.push('orange');
console.log(fruits);     // ['apple', 'banana', 'orange']
console.log(newLength);  // 3 (returns the new length)

// ✅ push() can add multiple elements at once
fruits.push('grape', 'kiwi');
console.log(fruits);     // ['apple', 'banana', 'orange', 'grape', 'kiwi']

// ========================= Using pop() =========================

// ✅ pop() removes and returns the last element
let lastFruit = fruits.pop();
console.log(lastFruit);  // 'kiwi'
console.log(fruits);     // ['apple', 'banana', 'orange', 'grape']

// ✅ pop() on an empty array returns `undefined`
let emptyArray = [];
console.log(emptyArray.pop()); // undefined

// ========================= Using unshift() =========================

let numbers = [2, 3, 4];

// ✅ unshift() adds elements at the beginning
newLength = numbers.unshift(1);
console.log(numbers);    // [1, 2, 3, 4]
console.log(newLength);  // 4 (returns the new length)

// ✅ unshift() can add multiple elements at once
numbers.unshift(-1, 0);
console.log(numbers);    // [-1, 0, 1, 2, 3, 4]

// ========================= Using shift() =========================

// ✅ shift() removes and returns the first element
let firstNumber = numbers.shift();
console.log(firstNumber); // -1
console.log(numbers);     // [0, 1, 2, 3, 4]

// ========================= Performance Considerations =========================

let arr = [1, 2, 3, 4, 5];

// ✅ push/pop are **fast** (O(1) complexity)
arr.push(6);    // Only affects the last element
arr.pop();      // Only affects the last element

// ❌ shift/unshift are **slow** (O(n) complexity)
//    → Must reindex all elements after modifying the first item
arr.unshift(0);
arr.shift();

/*
⚡ Summary of Performance:
--------------------------
🔹 push() & pop()   → Fast (O(1))
🔹 shift() & unshift() → Slow (O(n)) because they **shift all elements**
*/

// ========================= Implementing a Stack (LIFO) =========================

/*
📌 **Stack (Last-In, First-Out)**
   - Uses push() to add items
   - Uses pop() to remove items
   - The last item added is the first to be removed (LIFO behavior)
*/

let stack = [];

stack.push(1);
stack.push(3);
stack.push(2);
stack.push(15);

console.log("Stack after pushes:", stack); // [1, 3, 2, 15]

let lastElement = stack.pop(); // Remove last element
console.log("Stack after pop:", stack); // [1, 3, 2]
console.log("Popped element:", lastElement); // 15

// ========================= Implementing a Queue (FIFO) =========================

/*
📌 **Queue (First-In, First-Out)**
   - Uses push() to enqueue (add) items
   - Uses shift() to dequeue (remove) items
   - The first item added is the first to be removed (FIFO behavior)
*/

let queue = [];

// ✅ Adding items to the queue
queue.push(1);
queue.push(2);
queue.push(3);
console.log("Queue after pushes:", queue); // [1, 2, 3]

// ✅ Removing items from the queue (FIFO)
let firstItem = queue.shift();
console.log("Dequeued item:", firstItem); // 1
console.log("Queue after shift:", queue); // [2, 3]

/*
📌 Summary:
   🔹 Stack (LIFO)  → push(), pop()
   🔹 Queue (FIFO)  → push(), shift()
*/
