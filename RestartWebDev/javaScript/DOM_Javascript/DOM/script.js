const MyFunction = (name) => {
  console.log("Hello DOM!");
  //   let name = "Roshan";
  console.log(name.toUpperCase().toLowerCase());
};

// console.log(name.toUpperCase().toLowerCase());

MyFunction("ROSHAN");

let h1 = document.getElementById("headingOne");
h1.textContent = "Hi... My Name is Roshan Vishwakarma";
console.dir(h1);

// let h2 = document.getElementsByClassName("headingTow")[0]
// h2.textContent = "I am become a Sofware Engineer."

// let h2 = document.getElementsByClassName("headingTow")[0]
// h2.innerHTML = "I am become a Sofware Engineer."

let h2 = document.getElementsByClassName("headingTow")[0];
h2.innerText = "I am become a Sofware Engineer.";

console.dir(h2);

// let para = document.querySelector("div")
// para.innerHTML = 'Hello Word!'
// console.dir(para)

let para = document.querySelector(".MyPara");
para.innerHTML = "<h3>My name is roshan vishwakarma</h3>";
console.dir(para);

let a = document.querySelector("a");
a.href = "https://frontend-portfolio-5609.netlify.app/";
console.dir(a);

let img = document.querySelector("img");
img.src = "https://m.media-amazon.com/images/I/71oDTJru50L.jpg";
console.dir(img);

let img2 = document.getElementsByClassName("img2")[1];
img2.src =
  "https://m.media-amazon.com/images/I/51pIGwRkGQL._AC_UF350,350_QL80_.jpg";

// let img2 = document.querySelector(".img2");

// img2.src =
//   "https://m.media-amazon.com/images/I/51pIGwRkGQL._AC_UF350,350_QL80_.jpg";
// console.dir(img2);

let MyImg = document.getElementById("MyImg");
// MyImg.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/049/855/771/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg")
MyImg.src =
  "https://static.vecteezy.com/system/resources/thumbnails/049/855/771/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg";
// console.log(MyImg)

// MyImg.removeAttribute("src")

console.log(MyImg.getAttribute("src"))

