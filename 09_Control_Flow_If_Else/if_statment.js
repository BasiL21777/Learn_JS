'use static';

/*
📌 **Best Practices for Writing Conditional Statements in JavaScript:**
1️⃣ **Keep conditions simple:** If a condition becomes too complex, consider breaking it down into smaller checks or using a function.
2️⃣ **Use the ternary operator wisely:** It’s great for short, simple conditions but avoid using it for complex logic.
3️⃣ **Avoid deep nesting:** Too many nested `if` statements reduce readability. Try to refactor deeply nested conditions.
4️⃣ **Be mindful with multiple ternary operators:** If you find yourself chaining multiple ternary expressions, consider using `if...else if...else` instead for better readability.
5️⃣ **Prioritize readability:** Sometimes, a longer `if...else` structure is more readable than a compact but confusing ternary operation.
*/

/* ---------------------------------- */
/* 🟢 Example 1: Simple If-Else Condition */
/* ---------------------------------- */

let temperature = 25;

if (temperature > 30) {
	console.log("🔥 It's hot today.");
} else if (temperature < 10) {
	console.log("❄️ It's cold today.");
} else {
	console.log("🌤️ The weather is nice.");
}

/*
🔹 **Why this is good?**
- Simple `if...else if...else` structure makes it easy to understand.
- No unnecessary nesting.
*/

/* ---------------------------------- */
/* 🔴 Example 2: Nested If (Use with Caution) */
/* ---------------------------------- */

let num = 15;

if (num > 0) {
	console.log(`${num} is Positive`);

	// Nested condition (checks if the number is even or odd)
	if (num % 2 === 0) {
		console.log(`${num} is Even`);
	} else {
		console.log(`${num} is Odd`);
	}
} else {
	console.log(`${num} is Negative`);
}

/*
🔹 **Potential Issue?**
- The nested `if` structure is okay here, but if you add more conditions, it might become difficult to follow.
- A function-based approach might be better for deeply nested conditions.
*/

/* ---------------------------------- */
/* 🟠 Example 3: Ternary Operator for Simple Conditions */
/* ---------------------------------- */

let age = 20;

// Simple condition: Can the person vote?
let canVote = age >= 18 ? true : false;
console.log("🗳️ Can Vote:", canVote ? "✅ Yes" : "❌ No");

/*
🔹 **Why use a ternary operator?**
- The condition is **short and simple** (age check for voting eligibility).
- Improves readability and conciseness.
- Replaces a full `if...else` block.
*/

/* ---------------------------------- */
/* ⚠️ Example 4: Multiple Ternary Operators (Use Carefully) */
/* ---------------------------------- */

let category = age < 13 ? "Child" : age < 18 ? "Teenager" : "Adult";
console.log("👶👦🧑 Age Category:", category);

/*
🔹 **Problem?**
- The multiple ternary operators make it **harder to read**.
- For complex conditions, `if...else` is a **better choice**.

✅ **Better Alternative (Using if...else):**
let category;
if (age < 13) {
	category = "Child";
} else if (age < 18) {
	category = "Teenager";
} else {
	category = "Adult";
}
console.log("👶👦🧑 Age Category:", category);
*/
