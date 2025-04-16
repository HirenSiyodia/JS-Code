// Basic struture of FOR Loop
for (let index = 0; index <= 10; index++) {
    console.log(index);    
}

//We can use multiple for loop into one. and child can use parent property but parent can't.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(i + " * " + j + " =" + " " + i*j );           
    }
}

// We can use array in this as well.
let myArray =["mango", "banana", "chikoo", "apple"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}