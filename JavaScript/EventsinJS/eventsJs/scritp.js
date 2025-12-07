// //Code 1

// const t1 = performance.now();

// for(let i = 0; i<=100; i++) {
//     let para = document.createElement("p");
//     para.textContent = "This is My Para" + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("total time by code 1:" + (t2-t1));

// // code  2

// let myDiv = document.createElement("div");
// div.textContent = "This is My div"


let fragment = document.createDocumentFragment();

for(let i = 1; i<=100; i++) {
    let para = document.createElement("p");
    para.textContent = "This is My first Para" + i;
    fragment.appendChild(para);

}

document.body.appendChild(fragment);


