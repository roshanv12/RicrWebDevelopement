const number = [2, 4, 6, 8, 10, ];

// const numRsult = number.some((num) => {
//   console.log(num);
// });

// console.log(
//   number.some((num) => {
//     console.log(num);
//   }),
// );

const newResult = number.every((num) => {
  console.log(num);
  return !(num % 2 === 1);
});

console.log(newResult)