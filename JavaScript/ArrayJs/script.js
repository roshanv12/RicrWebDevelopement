/** Array in javaScript */

// Collection of items / elements ko hi Array kehte hai.

// array Creation

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

// array accese:
console.log(arr[4]); // output: 5
console.log(arr[3]); // output: 4
console.log(arr[0]); // output: 1
console.log(arr[9]); // Undefined (kyuki total number of index 7 hai isliye index 9 undefined hai)

// Modify of Array:

let myArray = ["roshan", "Rohit", 84, 76];

console.log(myArray);
myArray[2] = 100;
console.log(myArray);
myArray[3] = "Prince";
console.log(myArray);

// Array Methods: Push, Pop, Shift, unshift, splice, slice, reverse, sort

let Marray = [10, 20, 30, 40, 50, 60];
console.log(Marray);

Marray.push(100); //push array ke last me 100 add
console.log(Marray);
Marray.pop();
console.log(Marray); // pop karne se array ke last index jo v tha wo remove ho jayega.

Marray.unshift(200); // array ke first index par 200 add ho jayega.
console.log(Marray);
Marray.shift(); // shift karne se array ke first index par jo v value hogi wah remove ho jayegi
console.log(Marray);
