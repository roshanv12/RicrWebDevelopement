let h2 = document.querySelector("h2");
h2.style.backgroundColor = "pink";
console.log(h2);

let para = document.querySelector("p");
para.setAttribute("class", "MyPara");
console.log(para);

para.addEventListener("click", () => {
  console.log("Hello, Brother!");
});

let h3 = document.createElement("h3");
h3.innerText = "Hello, My name is Roshan Vishwakarma";

// para.appentChild(h2.cloneNode(true))

// let container = document.querySelector(".main-container")

// container.appendChild(h2.cloneNode(true))
// console.log(container)

// let childDiv = document.querySelector(".child-container")

// childDiv.appendChild(para.cloneNode(true))

let childBox = document.querySelector(".child-container");

let container = document.querySelector(".main-container");

let count = 1;

container.addEventListener("click", () => {
  count++;
  let newBox = childBox.cloneNode(true);
  console.log(newBox);
  newBox.textContent = count;
  container.appendChild(newBox);
});

// const container = document.querySelector(".main-container");
// const childBox = document.querySelector(".child-container");

// let count = 1;

// container.addEventListener("click", () => {
//   count++;

//   const newBox = childBox.cloneNode(true);
//   newBox.textContent = count;

//   container.appendChild(newBox);
// });
