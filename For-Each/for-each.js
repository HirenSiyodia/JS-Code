// ForEach => The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order.
// Unlike map(), forEach() always returns undefined and is not chainable.
// Syntax:-

const days = ["Monday", "Tuesday", "March", "April"];
days.forEach( (value, index, array) => {
console.log(value, index, array);

})
// o/p:-
// Monday
// Tuesday
// March
// April

const myObject = [{
    Name: "Hiren",
    FirstName: "Nanubhai"
},
{
    Name: "Ishita",
    FirstName: "Takhatbhai"
}
,{
    Name: "Hiren",
    FirstName: "Nanubhai"
},{
    Name: "Hiren",
    FirstName: "Nanubhai"
}]

myObject.forEach ( (index) => {
console.log(`Index Value is : ${index.FirstName}`);
})

// o/p"-
// Index Value is : Nanubhai
// Index Value is : Takhatbhai
// Index Value is : Nanubhai
// Index Value is : Nanubhai