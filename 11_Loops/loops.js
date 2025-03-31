'use static';

/*
📌 **JavaScript Loops**
JavaScript provides **four types of loops** for executing a block of code multiple times:

1️⃣ `for` loop → Best for when the number of iterations is known.
2️⃣ `while` loop → Runs **as long as** a condition remains true.
3️⃣ `do-while` loop → Runs **at least once**, then continues if the condition is true.
4️⃣ `for-of` loop → Simplifies iteration over iterable objects (like arrays & strings).
*/

/* ---------------------------------- */
/* 🟢 Example 1: `for` Loop (Fixed Iterations) */
/* ---------------------------------- */

for (let i = 0; i < 5; i++) {
	console.log(`Iteration number ${i}`);
}
// 🔹 Runs **5 times**, from `i = 0` to `i = 4`.
// 🔹 Best when the number of iterations is **predefined**.


/* ---------------------------------- */
/* 🔵 Example 2: `while` Loop (Condition-Based Iteration) */
/* ---------------------------------- */

let count = 0;
while (count < 5) {
	console.log(`Count is ${count++}`);
}
// 🔹 **Runs as long as** `count < 5`.
// 🔹 Useful when the number of iterations **isn't known beforehand**.



/* ---------------------------------- */
/* 🟠 Example 3: `do-while` Loop (Runs At Least Once) */
/* ---------------------------------- */

count = 0;
do {
	console.log(`${count++}`);
} while (count < 5);
// 🔹 Runs **at least once**, even if the condition is false initially.



/* ---------------------------------- */
/* 🟣 Example 4: `for-of` Loop (Iterating Over Iterable Objects) */
/* ---------------------------------- */

// 📝 **Iterable objects** → Arrays, Strings, Maps, Sets, etc.

let name = "Bassel";
for (const char of name) {
	console.log("Char:", char);
}
// 🔹 Loops through each **character** in the string.
// 🔹 **Simplifies** iteration compared to a traditional `for` loop.



/* ---------------------------------- */
/* 🔴 Example 5: `break` Statement (Exiting a Loop Early) */
/* ---------------------------------- */

for (let i = 0; i < 10; i++) {
    if (i === 5) break;  // 🚨 Loop stops when `i` reaches 5
    console.log(i);
}
// 🔹 `break` **immediately exits** the loop.
// 🔹 Useful when you **find what you're looking for** and don't need further iterations.



/* ---------------------------------- */
/* 🟡 Example 6: `continue` Statement (Skipping an Iteration) */
/* ---------------------------------- */

for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // 🔄 Skips iteration when `i = 2`
    console.log(i);
}
// 🔹 `continue` **skips the current iteration** but keeps looping.
// 🔹 Useful for **ignoring specific values** while looping.

