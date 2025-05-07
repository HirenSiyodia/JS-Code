// Inheritance => Inheritance in JavaScript is a mechanism by which one object or class can access the properties and methods of another. It allows code reuse, hierarchy creation, and method overriding.

class user1 {
    constructor(username){
        this.username = username;
    }
    greet(){
        console.log(`you name is ${this.username}`);
    }
}

class student1 extends user1 {
    constructor(username,grade) {
        super(username);
        this.grade= grade;
    }

    study(){
        console.log(`your name is ${this.username} and grade is ${this.grade}`);
    }
}

const details = new student1 ("Hiren", "B")
details.greet();
details.study();

// Inheritance 2
class user {
    constructor(name){
        this.name = name;
    }
    data(){
        console.log(`You name is ${name}`);
    }
}

class school extends user {
    constructor(name, email, score){
        super(name);
        this.email = email,
        this.score = score
    }
    study(){
        console.log(`hello name is ${this.name} and email is ${this.email} and socre is ${this.score}, thnak you`);
    }
}

const result = new school ("Hiren", "a@gmail.com", 97);
result.study()