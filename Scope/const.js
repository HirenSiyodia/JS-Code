function one(){
    username = "hiren siyodia" //parent cannot use child property
    function two(){
        email = "abc@gmail.com"
        // we can call parent in child but cant use child of parent
        console.log(`user name is: ${username} email id is: ${email}`);
    }
    // console.log(email); you cant use outside a child function
    two()    
}
one() //parent cannot use child property


// Hoisting
console.log(addOne(20));
function addOne(num){
    return num +2;
}
// hoisting:- we cannot define function if we using through variable.

const hostFunc = function addTwo(num1){ //using through variable
    return num1 + 2;
}
console.log(hostFunc(30));