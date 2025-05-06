// The call() method allows you to call a function with a specific this value and individual arguments.
function setUserName(username){
    this.username = username
}

function createUser(username, email, score){
    setUserName.call(this, username) 
    
    this.email = email,
    this.score = score
}

const chai = new createUser ("chai", "hiren@gmail.com", 22)
console.log(chai);


// 2nd method
function SchoolData(email, score){
    console.log(`Hi, ${this.uName} welcome to school. Your email is ${email} and score is ${score}`);    
}

const value = {uName: "siyodia"}
SchoolData.call(value, "hiren@gmail.com", 98)

// 3rd try

function showDetails(age, city){
    console.log(`Hi ${this.name}, Your age is ${age} and your city is ${city}`);
}

const fName = {name: "Hiren"}

showDetails.call(fName, 32, "Navsari")
showDetails.apply(fName, [25, "Ahmedabad"]);

