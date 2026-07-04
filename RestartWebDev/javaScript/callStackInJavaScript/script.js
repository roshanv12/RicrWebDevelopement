function first() {
  console.log("First Function");
}

function second() {
  console.log("Second Function");
  first();
}

function third() {
  console.log("Third Function");
  second();
}

third();

console.log("Example : 02");

function greet() {
  console.log("Hello");
}

console.log("Start");

greet();

console.log("End");
