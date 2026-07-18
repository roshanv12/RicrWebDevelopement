// const red = document.querySelector("#button-red");
// const blue = document.querySelector("#button-blue");
// const green = document.querySelector("#button-green");
// const gray = document.querySelector("#button-gray");
// const yellow = document.querySelector("#button-yellow");
// const pink = document.querySelector("#button-pink");

// red.addEventListener("click", (e) => {
//   document.body.style.backgroundColor = "red";
//   red.style.backgroundColor = "red";
// });

// blue.addEventListener("click", (e) => {
//   document.body.style.backgroundColor = "blue";
//   blue.style.backgroundColor = "blue";
// });

// green.addEventListener("click", (e) => {
//   document.body.style.backgroundColor = "green";
//   green.style.backgroundColor = "green";
// });

// pink.addEventListener("click", (e) => {
//   document.body.style.backgroundColor = "pink";
//   pink.style.backgroundColor = "pink";
// });

// yellow.addEventListener("click", (e) => {
//   document.body.style.backgroundColor = "yellow";

//   yellow.style.backgroundColor = "yellow";
// });

// gray.addEventListener("click", (e) => {
//   document.body.style.backgroundColor = "gray";
//   gray.style.backgroundColor = "gray";
// });

const buttons = document.querySelectorAll(".buttons");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = button.innerText;
    button.style.backgroundColor = button.innerText;
  });
});
