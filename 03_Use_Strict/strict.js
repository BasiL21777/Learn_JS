'use strict';
/*
it's from ES5 ,change how js behave
we add it in the beginning the file or function
*/

// x=21; // will make error bcz we use strict mode
let x=21; // this is oky
console.log(x);

/*
Benefits:

1)Prevents accidental globals: Without strict mode, assigning
	a value to an undeclared variable creates a global variable.
 	Strict mode throws an error instead.
2)Eliminates silent errors: Some developer errors that are silently
	 ignored in non-strict mode will generate errors in strict mode.
3)Improves performance: In some cases, strict mode code can be
	optimized to run faster than identical code not in strict mode.
4)Prohibits some unsafe features: Strict mode throws errors
	when certain unsafe actions are taken, like deleting a variable.

*/


// we can add strict mode to individual function too

function strict_function(){
	'use strict';
	let y=14; // this is oky
	// z=15 // not define
	console.log(y);
}

strict_function();
