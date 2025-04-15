//singleton

//Objetcs Literal
const mySymbl = Symbol('key1')
const JsUser = {
    name: "hiren",
    age: 18,
    [mySymbl]: "myKey1",
    email:"hiren@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "tuesday", "wednesday"]
 }
// Dot Notation
console.log(JsUser.name);
//Square Notation
console.log(JsUser["age"]);
console.log(JsUser[mySymbl]);

// Functions
// let greeting = function(){
//     console.log("hirennnnnn");
// }
// greeting()

// using 'this' => always use "backtick" its called sting interpolican
JsUser.greetingOne = function(){
    console.log(`hiren user, ${this.email}`);
}

console.log(JsUser.greetingOne());