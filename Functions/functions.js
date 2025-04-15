function selectAllValue(){
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("E");
    console.log("N");
}
// Calling through a function all items at a time
selectAllValue(); 

//How to work with return value
//Return value returns some of output while using console.log instead of return gives "Result: undefined"
function addNewNumber(number1, number2){
    return(number1 + number2);
}
const result = addNewNumber(4, 5);
console.log("Result:", result);


//Example for the loginuser

function loginUser(username){
    if(!username){
        console.log("not a user");
        return //once you return then nothing can execute into scope.
    }
    else {
    return `${username} just logged In`
    }
}
console.log(loginUser("zaid"));
