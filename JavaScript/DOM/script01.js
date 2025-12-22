// //

// let h1 = document.createElement("h1");
// h1.textContent = "hello ji kaise ho sare";
// document.body.prepend(h1);
// console.log(h1);

// let mydiv = document.createElement("div");
// mydiv.textContent = "my name is roshan vishwakarma";
// document.body.appendChild(mydiv);
// console.log(mydiv);

// // let heading = document.querySelector("h1");
// // console.log(heading.textContent = "my heading")

/** 
document.getElementById
document.getElementsByClassName
document.querySelector
document.querySelectorAll  */

// let heading = document.getElementById("heading");
// console.dir(heading); // getElementBuId se select karna.
// let para = document.getElementById("para2");
// console.log(para);

// let classs = document.getElementsByClassName("myclass");
// console.log(classs);

// let h1 = document.querySelector("h1");
// console.dir(h1);

// let mydiv = document.querySelectorAll("div");
// console.log(mydiv);

// let mypara = document.querySelector("p");
// mypara.setAttribute("class", "para")
// console.log(mypara);

// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com/?zx=1766034727814&no_sw_cr=1");
// console.log(a);

// let img = document.querySelector("img");
// img.setAttribute(
//   "src",
//   "https://cdn.pixabay.com/photo/2017/07/31/14/45/code-2558220_1280.jpg"
// );
// img.removeAttribute("src");

let h1 = document.createElement("h1");
h1.textContent = "my heading";
document.body.append(h1);

let mydiv = document.createElement("div");
mydiv.textContent = "my name is roshan vishwakarma i am from itarsi.";
document.body.append(mydiv);
mydiv.style.fontSize = "2rem";

let newpara = document.createElement("p");
newpara.textContent = "my paragraph";
document.body.append(newpara);

let mydiv = document.createElement("div");
mydiv.textContent = "my name is roshan vishwakarma i am from itarsi.";
document.body.append(mydiv);
mydiv.style.fontSize = "2rem";

let newpara = document.createElement("p");
newpara.textContent = "my paragraph";
document.body.append(newpara);
