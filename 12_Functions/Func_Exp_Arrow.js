'use static';

/*
Function Expressions and Arrow Functions
1) Function Expression
	- we assigned anonyms function to var
	- we can use var to call function again
	- anonyms is function has no name , assigned to var
2) Arrow Function (ES6)
	- provide a more concise syntax for writing function expressions.
	- For simple functions that just return a value
	- we can make them even more concise
	- handel 'this' keyword differently

- Function Declaration are hoisted => can be call before define in code
- function expression , arrow => not , must be define first
*/

// func expression
let greet=function(name) {
	console.log("Hello",name);
}
greet("Bassel")


// arrow function
let greetArrow = (name) => {
    console.log("Hello, " + name);
};

greetArrow("Bob"); // Outputs: Hello, Bob


let square= x=> x*x;
console.log( square(5));
