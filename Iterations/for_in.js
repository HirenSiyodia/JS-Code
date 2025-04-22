// For In Loop => Is is specially for a object we can use.

let myObject = {
    hi: "Hiren",
    is: "Ishita",
    pa: "Pappu"
}
for (const key in myObject) {
    // console.log(key);
}
//O/p:-
// hi
// is
// pa

let myObject1 = {
    hi: "Hiren",
    is: "Ishita",
    pa: "Pappu"
}
for (const key in myObject1) {
    console.log(`Here the key is ${key} and Value is ${myObject1[key]}`);
}

// // o/p:-
// Here the key is hi and Value is Hiren
// Here the key is is and Value is Ishita
// Here the key is pa and Value is Pappu