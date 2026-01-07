// debugger;
// console.log(firstName);

// var firstName = "Akash";
// let lastName = "Singh";
// let age = 15;
// const yearOfBirth = 1999;

// // let userIntro = 'Hi, my name is ' + firstName + ' ' + lastName

// alert("Are you sure?");
// let userInput = prompt("please enter your name");
// console.log(userInput);

// alert("Are you sure!");
// let userName = prompt("please enter your name...");
// console.log(userName);

// let confirmResult =  confirm("Hello ji kese ho sare");
// console.log(confirmResult);

let Username = "Roshan Vishwakarma";

console.log(Username[4]);

let result = console.log(Username.length);

// Strings Method (Without Arguments)

// toUpperCase:

let message = "    hi, i am Roshan Vishwakarma      ";
console.log(message);

// trim() ka use ham extra space hatane ke liye karte hai ager starting se spase 
// hatane ke liye ham trimStar() likhte hai , or end se spase hatane ke liye ham trimEnd() 
// likhte hai. or starting or end dono tarak se spase hatana ho to ham only time() likhte hai.


console.log(message.toUpperCase().trim().toLowerCase());
console.log(message.toLowerCase().trimEnd().trimStart());
console.log(message.toUpperCase().trimStart())
