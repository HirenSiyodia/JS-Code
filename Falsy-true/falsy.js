const email = "hiren@gmail.com"

if (email) {
    console.log("User can access");
} else {
    console.log("User can't access");
}

// Check for falsy value

const userEmail = "" // [] //Array assume there is a value in it
                    // "" //While this means there's falsy value so it will goes to else condition.
if (userEmail) {
    console.log("User can access");
} else {
    console.log("User can't access");
}

// Falsy Value => "", 0 , 0-, false, undefined, null, 0n

// true value => "0", " ", [], {}, 'false', function ()