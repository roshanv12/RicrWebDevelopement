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
console.log(message.toUpperCase().trimStart());

let collageStudents = "    Roshan Vishwakamra   ";
let resultCollage = collageStudents.trim().toLowerCase();
console.log(resultCollage.toUpperCase());

// Mthods (with Arguments) :- 1] includes, 2] indexOf, 3] replace() & replaceAll(), 4] concat(),
// 5] padStart() & padEnd(), 6] charAt() & charCodeAt(), 7] split()

//includes() // ham chek karte hai ye hamari String me he ya nhi ager hai to true result deta hai
// ager nhi hai to ye hame false result deta hai.
const introduction = "   Hi, I am Roshan  Vishwakarma";
console.log(introduction.trim().toUpperCase());
console.log(introduction.includes("Hi,")); // true
console.log(introduction.includes("A")); // false
console.log(introduction.includes("roshan")); // false

// indexOf(): hamre jo v character ya string hai wo  kon se index par exist karta hai.
console.log(introduction.indexOf("n"));
console.log(introduction.indexOf("am"));
console.log(introduction.indexOf("V"));

// replace(): kisi v character ko replace karke uski jagah kisi or character ya string ko likhna

console.log(introduction.replace("Hi", "Hello"));
console.log(introduction.replace("I", "My name is"));
console.log(introduction.replaceAll("a", "A"));

const introduction1 = "   Hello, Vishwakarma ji";
let result5 = introduction + "       " + introduction1;
console.log(result5.trim().toUpperCase());

//concat: do strings ko add karne ke liye use karte hai

// const introduction1 = "   Hello, Vishwakarma ji";
// console.log(introduction.replace("Hi",'Hello'))

console.log(introduction.concat(" hello", "Hello world", introduction1));

// patStart(): bank account nomber , creaded card PIN cteat karne ke liye use karte hai.

const accountNo = "5609"; // last for disit.
const accountNoCreat = accountNo.padStart(12, "X");
const accountNoCreat1 = accountNo.padStart(16, "#");
const accountNoCreat2 = accountNo.padStart(16, "*");

console.log(accountNoCreat); // output: xxxxxxxx5609
console.log(accountNoCreat1); // output: ############5609
console.log(accountNoCreat2); //************5609

let newAccountNo = `Last for digit in My Account no. ${accountNo} Hello Js ${introduction1.trimStart()}`;
console.log(newAccountNo.toLowerCase());
console.log(newAccountNo.toUpperCase());



