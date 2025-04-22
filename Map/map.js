
//Easiest Mapping => That means it will surely gives any output.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNum = nums.map( (num) => num * 2)
console.log(newNum);

// Chaining:- Like we can use as much method as we want. it execute one after one.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumber = number.map ( (value)=> value * 3 )
                    .map ( (value)=> value + 1 )
                    .filter ( (value) => value >=16 )

console.log(newNumber);
                    