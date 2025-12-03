
/** Functions creation **/

function myName() {
    console.log("RoshanVishwakarma");
}

/** Function calling **/
myName();


function numbercountion() {
    for(let i = 0; i<=100; i++) {
        console.log(i);
    }
}

numbercountion();

function printNumber(num) {
    console.log('print Number:' , num);
}

printNumber(5);

/** return functions **/

function getSum(a,b,c) {
    let sum = a + b + c;
    return sum;
}

 let ans = getSum(1,3,5);
 console.log(ans);


 function getMyName (firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
 }

 let fullName = getMyName("Roshan", "Vishwkamrama");
 console.log(fullName);