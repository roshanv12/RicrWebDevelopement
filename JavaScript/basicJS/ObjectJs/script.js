// const user = {
//   firstName: "Roshan",
//   lastName: " Vishwakarma",
//   age: 20,
//   address: "Bhopal",
//   branch: "CSBS",
// };

// console.log(user.firstName);
// console.log(user.lastName.trim());
// console.log(user.address);
// console.log(user.branch);
// console.log(user.age);

/*  Object in js*/

const introdection = {
  "User-Name": "Roshan Vishwakarma",
  Brnch: "CSBS",
  Address: "Itarsi",
  PhoneNumber: 7999687475,
  Bhai: {
    name: "amit rajput",
    class: "12th",
    AddressB: " bhopal",
  },
};

console.log(introdection);
console.log(introdection.Address);
console.log(introdection.Brnch);
console.log(introdection.PhoneNumber);
console.log(introdection["User-Name"]);
introdection.FirstName = "Rohit rathor";
console.log(introdection);
introdection.Brnch = "CSE";

const Register = {
  userName: "roshan vishwakarma",
  password: "roshan@123",
  mobileNuber: 7999687475,
  address: "bhopal",
  branch: "CSBS",
};

console.log(Register);
Register.password = "rishabh@123";
Register.FirstName = "Roshan"; //key add
console.log(Register.password);
const AD = Register.address;
console.log(AD)
