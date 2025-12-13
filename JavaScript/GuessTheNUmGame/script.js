const guessInput = document.getElementById("guess");
// console.log(guess);
const submitBtn = document.getElementById("submit");
// onsole.log(submit);
const result = document.getElementById("result");
// console.log(result);

let target = Math.floor(Math.random() * 10) + 1;
submitBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  if (guess === target) {
    result.textContent = "Your win! The number was " + target;
    target = Math.floor(Math.random() * 10) + 1;
  } else if (guess < target) {
    result.textContent = "Too low";
    alert("Try again");
  } else {
    result.textContent = "Too Hight";
    alert("Try again");
  }
});
