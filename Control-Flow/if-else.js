let age = 17;

if(age>=18){
    console.log("You Can Vote");
} else if (age<18) {
    const user = "Hiren"
    console.log(`${user},Try, Next Year. Please`);
} else
{
    console.log("Sorry, You can't Vote");
}
// Control flow of "If-Else" you can add else as much as you want.

const userLoggedIn = true
const debitCard = true
const empNumber = 251
const uName = "Hiren Siyodia"

if (userLoggedIn && debitCard && empNumber>300) {
    console.log(`${uName}, Good Morning, Verification completed.`);
} else if (userLoggedIn && debitCard && empNumber<50) {
    console.log(`${uName}, We are really sorry. Try Again...`);
} else {
    console.log("thank you. try again....");
    
}

// With using different data types we checking if else condition.