'use static';

/*
📌 **Return Statement in JavaScript**
- **Stops execution** of the function immediately.
- **Any code after `return` won't be executed**.
- If a function **has no `return` statement** or **returns nothing**, it returns `undefined`.
*/

/* ---------------------------------- */
/* 🟢 Example 1: Function with Return */
/* ---------------------------------- */

function add(a, b) {
    return Number(a) + Number(b); // ✅ Converts input to numbers before addition
}

let res = add(3, 5);
console.log(res); // Outputs: 8

/*
🔹 **Why use `return`?**
- Functions with `return` can **send back** values for further use.
- Without `return`, the function **executes but doesn't return a value**.
*/



/* ---------------------------------- */
/* 🔵 Example 2: Function with Multiple Returns (Grading System) */
/* ---------------------------------- */

function gradeScore(score) {
    if (score >= 90) {
        return "A";  // ✅ Function **stops** here if `score >= 90`
    } else if (score >= 80) {
        return "B";  // ✅ Function **stops** here if `score >= 80`
    } else {
        return "C";  // ✅ Default return for scores below 80
    }
}

console.log(gradeScore(95)); // Outputs: A
console.log(gradeScore(85)); // Outputs: B
console.log(gradeScore(75)); // Outputs: C

/*
🔹 **How does this work?**
- The **first matching condition** executes, and the function **exits immediately**.
- No unnecessary comparisons **after a return statement**.
*/


/* ---------------------------------- */
/* 🔴 Example 3: Function Without a Return */
/* ---------------------------------- */

function noReturn() {
    console.log("This function doesn't return anything");
}

let result = noReturn(); // ✅ Function executes but **returns `undefined`**
console.log(result); // Outputs: undefined

/*
🔹 **Why `undefined`?**
- JavaScript **automatically returns `undefined`** when a function has no `return`.
- This can be useful in **void functions** (functions that just execute something).
*/

