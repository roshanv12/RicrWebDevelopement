const green = document.querySelector(".greenBox");
const pink = document.querySelector(".pinkBox");
const blue = document.querySelector(".blueBox");

green.addEventListener("click", (e) => {
  e.stopPropagation;
  const text = (blue.innerText = "Hello Brother!");
  console.log(text);
});

pink.addEventListener("click", (e) => {
  e.stopPropagation;
  const text = (blue.innerText = "pinkBox");
  console.log(text);
});

blue.addEventListener("click", (e) => {
  e.stopPropagation;
  const text = (blue.innerText = "blueBox");
  console.log(text);
});
