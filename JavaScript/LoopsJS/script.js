// for (let count = 1; count <= 5; count++) {
//     console.log("Roshan Vishwakarma");
// }

// Q :- Calcutate sum of 1 to 5

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum +i;
// }

// console.log("sum =", sum);
// console.log("loop has ended");

// Q :- Print 1 to 5

// for (let i = 1; i <= 5; i++) {
//     console.log("i = ", i);
// }

// console.log(i);


/** While loop **/

// x1

// Practice Qs2:- 

let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
userNum = prompt("You entered wrong number. Guess again : ");
}

console.log("congratualtions, you entered the right number");