// // syntax
// do {
    
// } while (condition);
// Here the catch is it's give output first without checking condition.
let index = 1;
do {
    console.log(`Value of i= ${index}`)
    index++;
} while (index<=10)


//  o/p
// Value of i= 1
// Value of i= 2
// Value of i= 3
// Value of i= 4
// Value of i= 5
// Value of i= 6
// Value of i= 7
// Value of i= 8
// Value of i= 9
// Value of i= 10

    // Without checking condition

let i =11;
do {
    console.log(`Value of i= ${i}`);
    i= i*2;
} while (i <= 11);

// // o/p:-
// Value of i= 11