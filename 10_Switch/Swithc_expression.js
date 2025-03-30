'use static';

/*
📌 **Using Switch with `true` as the Condition**

- This pattern allows you to **simulate an `if...else` structure** in a switch statement.
- When `true` is used as the condition, **each case becomes a boolean expression**.
- Only the first **truthy case** will be executed, and subsequent cases are ignored.
- This approach can be helpful for **complex conditions** where an `if...else` structure is usually needed.

*/

let age = 25; // Change the age to test different cases

// Using `true` as the switch condition to simulate an if-else chain.
switch (true) {
    // Case 1: Age is less than 13
    case age < 13:
        console.log("Child"); // If true, "Child" will be logged.
        break;

    // Case 2: Age is between 13 and 19 (but not executed if case 1 is true)
    case age < 20:
        console.log("Teenager");
        break;

    // Case 3: Age is between 20 and 29 (will execute if age >= 20, ignored if case 2 is true)
    case age < 30:
        console.log("Young Adult"); // If true, "Young Adult" will be logged.
        break;

    // Default: Age 30 or above
    default:
        console.log("Adult"); // If none of the above cases are true, "Adult" will be logged.
}

/*
🔹 **Why use `switch(true)`?**
- This structure works like a series of **if...else if...else** checks, but in a **cleaner way**.
- Each case is a boolean expression. The first **truthy** condition will be executed.
- It's **useful for complex conditions** when you want to test multiple criteria without nesting `if...else` statements.

🔹 **Example Breakdown:**
- Given `age = 25`, the first condition `age < 13` is false, so it moves to the next case.
- `age < 20` is also false, so it checks `age < 30`, which is **true**.
- Thus, "Young Adult" will be logged, and the `switch` will **exit**.

🔹 **What would happen if we removed a `break` statement?**
- If there was no `break` after a case, the switch would continue checking subsequent cases even if they were false, which is similar to **fall-through** behavior.

*/

