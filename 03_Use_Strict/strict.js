'use strict'; // Enforces strict mode, which changes JavaScript behavior to be more secure and reliable.

/*
Strict mode was introduced in ECMAScript 5 (ES5) to help developers write better code
by eliminating some of JavaScript’s problematic features.

To enable strict mode, add `'use strict';` at the beginning of a script or function.
*/

// x = 21; // ❌ This will cause an error because 'x' is not declared, and strict mode prevents implicit global variables.

let x = 21; // ✅ This is correct because 'x' is explicitly declared with 'let' or 'const'.
console.log(x); // Output: 21

/*
Benefits of using 'strict mode':

1) Prevents accidental global variables:
   - Without strict mode, assigning a value to an undeclared variable automatically creates a global variable.
   - With strict mode, this results in an error, making it easier to avoid unintended global variables.

2) Eliminates silent errors:
   - Some JavaScript errors that would fail silently in non-strict mode will now throw explicit errors.
   - This makes debugging easier.

3) Improves performance:
   - Some JavaScript engines can optimize strict mode code better than non-strict mode code.

4) Prohibits unsafe actions:
   - Strict mode prevents the use of certain JavaScript features that are considered bad practice.
   - Example: Deleting variables, using duplicate parameter names, and assigning values to read-only properties.
*/

// Strict mode can also be applied to individual functions instead of the whole script.
function strict_function() {
    'use strict'; // Strict mode applies only within this function.

    let y = 14; // ✅ This is fine.
    // z = 15; // ❌ This will throw an error because 'z' is not declared.

    console.log(y); // Output: 14
}

strict_function(); // Calling the function to test strict mode behavior.
