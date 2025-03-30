'use static';

/*
- any code after return wont be executed
- if function has no return or return nothing => will return undefine
*/

function add(a,b){
return Number(a)+Number(b);
}
let res=add(3,5);
console.log(res);

function gradeScore(score) {
	if (score>=90) {
		return "A";
	} else if(score>=80) {
		return "B";
	}
	else{
		return "C";
	}
}

console.log(gradeScore(95));
console.log(gradeScore(85));
console.log(gradeScore(75));

function noReturn() {
    console.log("This function doesn't return anything");
}

let result = noReturn();
console.log(result); // Outputs: undefined
