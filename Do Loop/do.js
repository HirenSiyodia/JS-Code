// Syntax of while loop
// while (condition) {
// }

//Example
let i=1;
while (i<=10) {
    console.log(`Value of i= ${i}`);
    i = i+2;
}
// //o/p:-
// Value of i= 1
// Value of i= 3
// Value of i= 5
// Value of i= 7
// Value of i= 9

// Example using array in while loop

let myArray= ["banana", "chikoo", "apple"]
let arr= 0;
while (arr < myArray.length) {
    console.log(`my array name is ${myArray[arr]}`);
    arr = arr+1;    
}
// o/p
// // my array name is banana
// my array name is chikoo
// my array name is apple