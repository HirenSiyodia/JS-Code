// Reduce:-

const nums = [1, 2, 3];

let newNum = nums.reduce ( (acc, val) => acc+val,0);
// console.log(newNum);
// o/p:= 6

const books = [{
    itemName: "js course",
    price: 2999
},
{
    itemName: "py course",
    price: 999
},
{
    itemName: "mobile dev course",
    price: 5999
},
{
    itemName: "data science course",
    price: 12999
},
]
let final = books.reduce( (accu, item) => accu + item.price, 0)

console.log(final);
