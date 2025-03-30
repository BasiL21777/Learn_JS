'use static';

/*
- in JS has 4 types of loops
	1) for loop
	2) while loop
	3) do-while loop
	4) for-of loop (ES6)
*/

for (let i = 0; i < 5; i++) {
	console.log(`Iteration number ${i}`);
}

///////////////////

let count=0;
while(count < 5){
	console.log(`Count is ${count++}`);

}


///////////////////////
count=0;
do {
	console.log(`${count++}`);
} while (count<5);

////////////////////
// for of => provides a concise way to iterate over iterable objects (like strings)
// iterable objects => array , string , ...

let name="Bassel";
for (const char of name ) {
console.log("Char:",char);

}

///////////////
// Using break
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// Using continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
