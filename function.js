// function demo(){
//     console.log("function without parameters");

// }
// demo();
// function userDetails(name,age,city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// userDetails("dharnidhar""20""hyderabad")
// -----function expression------
// let x= function(){
//     console.log("Function expression is executing");

// };
// x();
//-----IIFE----
// (function(){
//     console.log("IIFE");
// }) ();
//--arrow function---
// function demo(){
//     console.log("Hello");

// }
// demo();
// let x=(a,b)=>console.log(a+b);
// x(5,5);

let x=_=>{console.log("Hi");
    console.log("hello");
    console.log("bye");}
    x();

// return keyboard
function demo(a,b){
    return a+b;
};
let x = demo(5,5);
console.log(x);

let y = (a,b) => a+b;
let a = y(10,20);
console.log(a);

let z=(a,b)=>(return a+b); //explict returnS
let b=z(10,100);
console.log(b);

//! Higher order function
function hof(a){
    return a;
};
let x = hof([1,2,3,4,5]);
console.log(x);