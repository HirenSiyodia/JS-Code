// Constructor Function => A constructor function in JavaScript is a special type of function used to create and initialize multiple objects with the same structure. It's an older alternative to ES6 class, but still very valid and widely used.
function User(name, email) {
    this.name = name;
    this.email = email;

    this.greet = function () {
        console.log(`Hello, I'm ${this.name}`);
    };
}

// Create objects using 'new'
const user1 = new User("Hiren", "hiren@gmail.com"); //Using "new" everytime we get a new value.
const user2 = new User("Raj", "raj@gmail.com");

user1.greet();  // Output: Hello, I'm Hiren
user2.greet();  // Output: Hello, I'm Raj


// new
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);