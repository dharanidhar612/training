//! higher order function

function hof(a){
    return a;
};
let x = hof(function(){return "Hello i am a callback function"});
console.log(x);

function parent(callback){
    return callback;
}
parent();

function add(a,b){
    return a+b
}
let x = parent(add(5,5));
console.log(x);

function add(a,b){
    return a+b
}