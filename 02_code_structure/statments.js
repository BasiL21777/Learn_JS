
// create the message variable
let message = "Hello";
console.log(message);
message="World";
console.log(message);
/*
in best practice use ; bcz it make code more consistent
and avoid mistakes
*/

//////////////////// BLOCKS/////////////////////////////

if(true){
	let blockScoped="I'm inside the block";
	console.log(blockScoped);
}

// console.log(blockScoped); // will make error bcz I try access var in scope

for (let i = 0; i < 3; i++) {
	console.log("Loop Iteration: "+i);
}

////////////////WHITE_SPACE/////////////////////////////
// js ignore spaces , tabs , newlines between the code
 let sum=
 1+
 2+
 3;
 console.log("SUM: "+sum);
