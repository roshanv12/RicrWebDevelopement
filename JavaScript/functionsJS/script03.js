// Function in JavaScript

// Type of Function: 1] Function Declaration, 2] Function Expression, 3] Arrow Function.

function abcd() {
  // Function Declaration.
  console.log("roshan vishwakarma");
}

let collegeName = function () {
  // Function exptession.
  console.log("SIRT Bhopal");
};

let xyz = () => {
  // Arrow Function.
  console.log("I am RICR Student");
};

abcd();
collegeName();
xyz();

function Calculation(value1, value2) {
  console.log(value1 + value2);
  console.log(value1 - value2);
  console.log(value1 / value2);
  console.log(value1 * value2);
  console.log(value1 % value2);
}
Calculation(10, 20);

let college = function (CName) {
  console.log(`I am ${CName} Student in Bhopal`);
};
college("SIRT");
college("LNCT");
college("JNCT");
college("JNCT");
college("JNCT");
college("JNCT");

// Parameters :- Default parameter, Rest parameter, and Spread parameter.

let numbers = function (num1, num2) {
  console.log(num1, num2); // output: Undefined
  console.log(num1 + num2); // output: NaN (Not a Number)
};

numbers(); // output: Undefined / NaN

// Defoult parameter and Rest parameter.

/** jab han argument meain koi value nhi dete hai or parameter jo koi defoult nalue 
 assign karte hai to ise hi defoult parameter kahte hai.*/

function num(x = 12, y = 20) {
  // x or y main jo defoult value assign ki hai inehi ham defoult parameter kehte hai.
  console.log(x + y);
}
num(); // argument me hamne koi value nhi bheji

// rest / spread parameter

// ... lagkar parameter ka name likhte hai ise hi rest ya sread parameter kahte hai.
//  jab number of arguments jyda ho tab ham rest ka use karte hai.

let rollNo = function (...num) {
  console.log(num);
};

rollNo(1, 2, 3, 4, 5, 6, 7, 8, 89);

function UserName(a, b, c, ...name) {
  console.log(a, b, c, name);
}

UserName(
  "roshan",
  "rohit",
  "roshni",
  "arun",
  "Anit",
  "prince",
  "piyush",
  "ratnesh"
);

/// return

function hello1(v) {
  console.log(v);

  return 12 + v;
}

let cal = hello1(20);
console.log(cal);

function roshan(val) {
    val()
}

roshan(function () {
    console.log('RICR Student');
});
