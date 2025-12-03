// for(let i = 1; i<=5; i++) {
//     console.log(typeof "roshanVishwakarma");
// }

// for(let i = 0; i<=100; i++) {
//     console.log(i,"roshan");
// }

/** Strings **/


// let firstName = "Roshan vishwakarma";
// let firstName = 'Roshan vishwakarma';
// let firstName = `Roshan
//  Vishwakarma`;

// console.log(firstName);

// let op1 = 'English ';
// let op2 = 'Hindi ';

// let ans = op1 + op2;
// console.log(ans.toUpperCase());
// console.log(ans.toLocaleLowerCase());
// console.log(ans.length);


/** Array **/

// let obj = {
//     name: "roshan",
//     age: 20,
//     weight: 40,
//     height: "5ft",
//     greet:function(){
//         console.log("Hello jee kese ho sare");
//     }
// };

// console.log(obj);
// obj.greet();

/** creation of arrays **/

let arr = [1,2,3,4,5];
console.log(arr);

/** array constructor **/

let brr = new Array("roshan",1,true);

//array index[]
// console.log(brr[0]); // roshan
// console.log(brr[1]); //1
// console.log(brr[2]); //true
// console.log(brr[3]); //undefined

brr.push('Vishwakarma'); // push
brr.pop(); // pop

brr.shift(); // remove left item
brr.unshift("roshanVishwakarma"); // add element in left side

console.log(brr);
