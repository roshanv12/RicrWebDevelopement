console.log("Local Storage in JavaScript");

const nameVlue = document.querySelector(".name-value");

const h2 = document.querySelector("h2");

const inputText = document.querySelector("#textInput");

console.log(inputText);

console.log(nameVlue);

console.log(h2);

h2.style.backgroundColor = "pink";
h2.style.color = "blue";

// const StorageName = (nameVlue.innerText = localStorage.myName);

nameVlue.innerText = localStorage.myName;

nameVlue.style.color = "green";

inputText.addEventListener("input", (e) => {
  localStorage.myName = e.target.value;
  nameVlue.innerText = localStorage.myName;
  console.log(localStorage.myName)
    // console.log(e.target.value)
});
