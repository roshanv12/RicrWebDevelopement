//higher order function
function a(b) {
  console.dir(b);
  b();
}

//callback function
a(function () {
  console.log("Hiiiiiiiiiiiiiiiiiii");
});

const newFunction = function (a, b) {
  console.log(a + b);
  console.log("Roshan Vishwakrama");
};

newFunction(3, 5);

function x(y) {
  console.log(
    "Hi..., My Name is Roshan Viswhakarma, I am a SoftWare developer.",
  );
  console.log(y);
  y();
}

// function dost() {
//   console.log('Hello, My Name is Arun Sarathe .')
// }

x(function() {
  console.log("Hello, My Name is Arun Sarathe.");
});
