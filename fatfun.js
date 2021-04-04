// fat arrow function
function myfun() {

    return "normal function";
}
// function calling
const x = myfun();
console.log(x);

// fat arrow function define

const myfun1 = () => {

    return 'fat arrow function';
}

//calling fuction
let y = myfun1();
console.log(y);

// fat arrow function with arguments

let myfun2 = (n) => { // formal argument
    return `fat arrow ${n} with argument`;

}
let z = myfun2("fun"); // actuat argument
console.log(z);
// normal function
function myfunA() {
  console.log( "new A function");

}
myfunA();
