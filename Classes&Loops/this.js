// "this" refers to the object that is executing the current function. Its value depends on how the function is called — not where it is defined.

const user = {
    username: "Hiren",
    isLoggedIn: true,
    loginCount: 9,

    getUserDetails: function () {
        // console.log("We got the details.");
        console.log(`Username is ${this.username}`); // in a "function" scope.Username is Hiren =>Here "this meaning is it execute the current context data"
        console.log(this);        // {username: 'Hiren', isLoggedIn: true, loginCount: 9, getUserDetails: [Function: getUserDetails]} and only this will execute all the datas.
     }
}
console.log(user.username);
console.log(user.getUserDetails());