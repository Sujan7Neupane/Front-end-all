// JS is dynamically typed language => anything can can stored in a variables. For eg: fullName=24; bad practice but can do it
// printing anything
console.log("Hello world!");

//  *****************************************************************
// VARIABLES => container to store values in memory location
// fullName = "fullName"; String
// age = 26;              number
// price = 99.99;         decimal
// radius = 16;           number
// a = null;              null
// b = undefined;         undefined
// isFollow = false;      boolean

let age = 26;
console.log(age);

let email = "sn242117888@gmail.com";
console.log(email);

// caseSensative
// can start with _ or $ but not space
// reserved keywords like console log cannot be used to declare variables
// ***************************************************************

// ***************************************************************
// // let, const and var(outdated) => keywords
// let for variable
// const for constant data (which doesn't change)

let animalName = "dog";
// let animalName = "cat";

console.log(animalName);

const PI = 22 / 7;

console.log(PI);

const A = 0;

console.log(A);

// ***************************************************************

// ***************************************************************
// var is not a block level
var fname = "outblock Sujan";
{
  var fname = "sandhya";
  console.log(fname);
}
console.log(fname);

// block level ma chahi name lai let ley declare garna milxa
let name = "outblock Sujan";
{
  // let can be updated
  let name = "sandhya";
  name = "Sujan";
  console.log(name);
}
name = "sand";
console.log(name);
console.log(name);

{
  let name = "BLOCK sujan";
  console.log(name);
}

/* // const cannot be updated 
// const b = "ball";
// b = "cat";

// console.log(b); */

// block nahuda mildaina => throws error
// let laptopName = "acer";
// let laptopName = "hp";

// console.log(laptopName);

// ***************************************************************

// ***************************************************************
// DataType in JS => Primitive and Non-primitive
// Data ko type = DataType

/* // primitive datatype => 7 types
// Number Null String Symbol Boolean BigInt undefined NNSSBBU(Shortcut)

// non-primitive datatype =>objects (Arrays, Functions) */

// Objects => collection of the datatypes / key:value pairs
// For eg

const student = {
  name: "Student",
  age: 26,
  fullName: "Students",
  isPass: true,
};

console.log(student);
console.log(typeof student["fullName"].toUpperCase());

student.name = "Sujan Neupane";

const product = {
  title: "Parker Jotter Standard CT Balla Pen",
  name: "(Black)",
  rating: 4,
  price: 270,
  offer: 5,
};

console.log(product);

const profile = {
  username: "Sujan Neupane",
  isFollowing: true,
  Followers: 123,
  following: 125,
};

console.log(typeof profile.username);
console.log(profile["username"]);
console.log(typeof profile["isFollowing"]);

const users = {
  fullname: "Sujan Neupane",
  age: 22,
  usingSince: 2022,
  isActive: true,
  isLogin: true,
};

console.log(users.age);
// OR
console.log(users["age"]);

const player = {
  name: "Cristiano",
  dob: "10-06-1987",
  age: 39,
  country: "Portugal",
  fullName: "Cristiano Ronaldo Dos Santos Averio",
  jerseyNumber: 7,
  shortName: "CR7",
  nickname: "GOAT, el bicho, Mr. UCL",
  noOfChildren: 5,
  girlfriendName: "Georgina Rodrigues",
  oldestChild: "Cristiano Jr",
  biggestFan: "iShowSpeed",
  iconicCelebrations: "Suiiiiiiiiii, Calma",
  currentClub: "Alnassr",
  previousClub: "Manchester United",
  clubsPlayedWith: "Real Madrid, Juventus, Sporting Lisbon",
  firstClub: "Sporting Lisbon",
  titlesWon: "Champions League, Euro League , Premier League etc..",
  championsLeagueWon: 5,
  goldenBoot: 4,
  instaFollower: "620 Millions",
};

console.log(player);
console.log(player["name"]);
console.log(player.dob);
console.log(player["noOfChildren"]);
console.log(player["iconicCelebrations"]);

// const remote = {
//     name : "bocremotes",
//     type : "tvboxremote",
//     purpose : "toOpenTv",
//     color : "darkAndBlue",
//     buttons : "multiple",
//     price :  "Nrs. 1500"
// }
// console.log(remote);

// ***************************************************************

// ******************************************************************************************
// Operators and Conditional Statements
// Operators are the symbols that are used to perform mathematical operations

// arithmetic operators => math operations e.g. + - * / %

let x = 5;
let y = 2;

console.log(`(x + y) = ${x} + ${y} = ${x + y}`);
console.log(`(x - y) = ${x} - ${y} = ${x - y}`);
console.log(`(x * y) = ${x} * ${y} = ${x * y}`);
console.log(`(x / y) = ${x} / ${y} = ${x / y}`);
console.log(`(x % y) = ${x} % ${y} = ${x % y}`);
console.log(`(x ** y) = ${x} ** ${y} = ${x ** y}`);

// Unary operators => increment and decrement
// a++ a--;

// assignment operators
// =, +=, -=, *=, /=, %=
// a += 4;

// comparison operators => to compare two values
// <, >, <=, >=
let s = 2;
let t = "2";

console.log(`Compare s and t which is ${s === t} `);

// Logical operators =>
// &&, ||, !

let num1 = 6;
let num2 = 10;

console.log("cond1 && cond2", num1 < num2 && num2 === 10);

// console.log(`cond1 && cond2: ${num1 < num2 && num2 === 10}`); if both true then true

// console.log(`cond1 && cond2: ${num1 > num2 || num2 == 11}`); both false then false

// ! makes true data false and false data true

i = 10;
j = 20;
sum = 0;
i++;

i -= 10;
console.log(`sum = ${i + j}`);
console.log(`Value of i =`, i);

let abc = 10;
let def = 9;
let ghi = 20;
let jkl = 15;
console.log(
  `both are true then result will be true (AND logical operators), ${
    abc > def && ghi > jkl
  }`
);
console.log(
  `both are false then result will be false (OR logical operators), ${
    abc > def || ghi > jkl
  }`
);

// ****************************************************************************************************************************

// ****************************************************************************************************************************
// Conditional Statements => to implement if else statements

// if statements -> if any if is true then result will be printed
// eg:1
let myAge = 2;

if (myAge > 18) {
  console.log("Congratulations! you can aply for driving liscense");
}

if (myAge < 18) {
  console.log("Sorry! you cannot aply for driving liscense");
}

// eg:2
let mode = "dark";

if (mode === "fair") {
  color = "black";
}

if (mode === "dark") {
  color = "white";
}

console.log(color);

// *************************************************************************

// if-else statements
let childAge = 10;

if (childAge > 10) {
  console.log("Sorry! cannot have chocolate");
} else {
  console.log("Yes you can have chocolate");
}

// checking odd and even numbers
let number = 0;

if (number % 2 === 0) {
  console.log(number, "is even");
} else {
  console.log(number, "is odd");
}

// if-else ladder or else-if statement
const oldAge = 200;

if (oldAge <= 65) {
  console.log("Soory! not eligible");
} else if (oldAge <= 70) {
  console.log("You are eligle.");
} else if (oldAge <= 80) {
  console.log("You are eligible for premium membership.");
} else if (oldAge <= 100) {
  console.log("You are eligible for exclusive pro max membership");
} else {
  console.log("Age above 100 are not eligible thanks !!");
}

// Ternary operators
// Syntax
// condition?true output:false condition

let practiceAge = 58;

let result = practiceAge >= 25 ? "Adult" : "not adult";

console.log(result);

// Practice Questions
// 1. Get input from user as prompt("ENter a number:").
//     check if number is a multiple of 5 or Not

let input = prompt("Enter a number:");

if (input === null || input === "") {
    console.log("You didn't enter anything!");
  }
else if (input % 5 === 0) {
  console.log("Yes it is multiple of 5");
} else {
  console.log("No it is not");
}

// let userInput = prompt("Type something:");

// if (userInput === null || userInput === "") {
//   console.log("You didn't enter anything!");
// } else {
//   console.log(`You entered: ${userInput}`);
// }

