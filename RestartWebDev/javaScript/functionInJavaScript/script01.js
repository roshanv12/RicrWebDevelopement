// return keyword in function

// Function Definition
function introduceMe(username, profession, age) {
  // console.log(typeof username);
  // console.log(typeof profession);
  // console.log(typeof age);
  console.log("Hi,");
  console.log(`My name is ${username || "Procodrr"}.`);
  console.log(`I am a ${profession}`);
  console.log(`I am ${age} years old.`);
}

// //                  Function Call
// const returnValue = introduceMe()

introduceMe("Roshan Vishwakarma", "Software Engineer", 25);

console.log("*************************");

introduceMe("Akash", "Mechanical Engineer", 27);

function newFunction() {
  console.log(5 + 6);
  return 11;
}

newFunction();

const result = newFunction();

console.log(result);

function addition(a, b, c, d) {
  console.log(a + b);

  console.log(`A = ${a} B = ${b} C = ${c} D = ${d}`);

  return a + b + c + d;
}

addition(100, 32, 56, 76);
