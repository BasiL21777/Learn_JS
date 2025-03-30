'use static';

/*
- function help in encapsulate code
- parameters copy the value that sent
- we can set default value (ES6)
- if we provide parameters less than expected num => undefine
- if more than => extra will ignored
*/

function sayHello(){
	console.log("Hello , World!");
}
sayHello();

function greet(name,time){
	console.log("Good",time,",",name,"!");
}

let name = "Bassel";
greet(name,"Morning") // this arguments are copied
// name will not be changed , we copied the value
console.log(name);

// has default parameter
function greetWithDefault(name="Guest") {
console.log("Hello",name);
}
greetWithDefault()
greetWithDefault(name)


// less , extra arguments
greet() // name , time => undefine 
greet(name,"morning","will be ignored")
