/*if (hamburger && fries) {
	console.log('я сыт');
}*/

/*const hamburger = 3;
const fries = 1;

if (hamburger === 3 && fries) {
	console.log('Мы сыты');
} else {
	console.log ('Мы уходим');
}*/

/*const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger===3 && cola===2 || fries===3 && nuggets) {
	console.log('Мы довольны');
} else {
	console.log ('Мы уходим');
}

console.log (hamburger || fries || cola);

let johnReport, alexReport, samReport, mariaReport = "done";
console.log(johnReport || alexReport || samReport || mariaReport);*/

/*let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
	console.log('Done!');
} else {
	console.log("hoi");
}*/

/*let num = 50;*/

/*while (num < 55) {
	console.log(num);
	num++;
}*/
/*do {
	console.log(num);
	num++;
}
while (num < 55);*/

/*for (let i = 20; i > 10; i--){
		console.log(i);
}*/

/*for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}*/

/*let result = "";
const length = 7;

for (let i = 1; i < length; i++) {

	for (let j = 0; j < i; j++) {
		result += "*";
	}

	result += '\n';
}

console.log(result);*/


/*first: for (let i = 1; i < 6; i++) {
	console.log(`first level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if(k===2) continue first;
			console.log(`third level: ${k}`);
		}
	}
}

for (let i = 20; i > 10; i--) {
	if (i < 13) break;
	console.log(i);
}

for (let i = 2; i < 11; i++) {
	if (i % 2 !== 0) { continue; };
	console.log(i);
}*/

/*let num = 1;

while (num < 10) {
	num++;
	if (num == 3) continue;
	if (num == 5) continue;
	if (num == 7) continue;
	if (num == 9) continue;
	console.log(num);
}*/

/*let i = 2;

while (i <= 16) {
	i++;
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
	arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);*/


/*const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 1; i <= arr.length; i++) {
	result[i - 1] = arr[i - 1];
}
console.log(result);*/


/*const data = [5, 10, 'Shopping', 20, 'Homework'];
for( let i=1; i<=data.length;i++) {
	if (typeof(data[i-1]) == "string"){
		data[i-1]= data[i-1]+" - done";
	} else {
		data[i-1]= data[i-1] * 2;
	}
}
console.log(data);*/
/*
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for( let i=1; i<=data.length;i++) {
		result[i-1]= data[5-i];
}
console.log(result);*/

/*const lines = 6;
let result = '';
for (let i = 1; i <= lines; i++) {

	for (let w = 6; w > i; w--) {
		result += " ";
	}
	for (let j = 0; j < i; j++) {
		result += "*";
	}
	for (let p = 1; p < i; p++) {
		result += "*";
	}

	result += '\n';
}

console.log(result);

let num = 20;

function showFirstMessage (text){
	console.log(text);
	num = 20;
}

showFirstMessage("Hello World");
console.log(num);*/

const usdCurr = 28;

function convert(amount, curr) {
	console.log(curr * amount);
}

convert(500, usdCurr);

function sayHello(name) {
	return "Привет, name";
}

sayHello("Антон");

function returnNeighboringNumbers(variables) {
	return ([variables - 1, variables, variables + 1]);
}
returnNeighboringNumbers(5);


function getMathResult(number, progression) {
	if (typeof (progression) === "string") {
		return number;
	}
	else if (progression <= 0) {
		return number;
	}
	else {
		let str = "";
		for (let i = 1; i <= progression; i++) {
			if (i === progression) {
				str += `${number * i}`;
			}
			else { str += `${number * i}---`; }
			console.log(str);
		}
		return (str);
	}
}
getMathResult(5, 3);