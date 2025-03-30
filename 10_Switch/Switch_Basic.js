'use static';

/*
📌 **Switch Statement in JavaScript**
- Used when checking **multiple conditions** against a **single variable**.
- **Alternative to multiple `if...else if` conditions**.
- **Each case** must end with a `break` to prevent **fall-through** behavior.
- If no cases match, the `default` block executes.
*/

/* ---------------------------------- */
/* 🟢 Example 1: Basic Switch Statement */
/* ---------------------------------- */

let day = 3;  // Change this value to test different days
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "❌ Invalid day"; // Executes if no cases match
}

console.log("📅 Today is:", dayName); // Outputs: Wednesday (if day = 3)

/*
🔹 **Why use switch?**
- Improves readability over multiple `if...else if` checks.
- Efficient when comparing **one variable against multiple values**.
*/

/* ---------------------------------- */
/* 🔴 Example 2: Importance of `break` (Avoiding Fall-Through) */
/* ---------------------------------- */

let fruit = "apple";
let response;

switch (fruit) {
    case "banana":
        response = "🍌 Banana is good!";
        break;
    case "apple":
        response = "🍏 How do you like them apples?";
        // ❌ **No break here! This causes fall-through!**
    case "orange":
        response += " 🍊 Orange you glad I didn't say banana again?";
        break;
    default:
        response = "🤷 I'm not familiar with that fruit.";
}

console.log("🛒 Response:", response);
// Outputs: "🍏 How do you like them apples? 🍊 Orange you glad I didn't say banana again?"

/*
🔹 **What happened here?**
- Since there is **no `break` in the "apple" case**, execution continues to the next case ("orange").
- The response gets **appended**, leading to **unexpected output**.
✅ **Fix:** Always use `break` unless fall-through behavior is intentional.
*/

/* ---------------------------------- */
/* 🟠 Example 3: Grouping Cases (Multiple Cases for the Same Output) */
/* ---------------------------------- */

let grade = "B"; // Change this to test different grades
let feedback;

switch (grade) {
    case "A":
    case "B":
        feedback = "✅ Good Job!";
        break;

    case "C":
        feedback = "📖 You Can Do Better.";
        break;

    case "D":
    case "F":
        feedback = "❌ You need to study more.";
        break;

    default:
        feedback = "❓ Invalid Grade.";
}

console.log("📚 Feedback:", feedback);

/*
🔹 **Why group cases?**
- If **multiple conditions** result in the **same outcome**, grouping them **reduces code repetition**.
- In this example:
  - **A & B → "Good Job"**
  - **D & F → "You need to study more"**
- This makes the code **cleaner and more readable**.
*/

