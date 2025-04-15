if (true) {
    var a = 5
    let b = 10
    console.log("Inner", a); //We can use function scope but can redeclare outside the "{}"
    
    const c= 15
}

var a = 25 // Global Scope: We can redeclare and reupdate the "var"
console.log(a);

 let b = 35 //Functional scope: We can reupdate but we cant redeclare.
console.log(b);
// console.log(c);


