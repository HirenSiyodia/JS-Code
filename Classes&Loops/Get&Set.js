// get => A getter is a special method that gets the value of a property and returns it when the property is accessed.
// set => A setter is a special method that sets or modifies the value of a property when it's assigned.
class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return `${this._email}nodata`
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hiren`
    }

    set password(value){
        this._password = value
    }
}

const result = new user ("hiren@gmail.com", "abc")
console.log(result.email);
