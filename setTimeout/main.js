// setTimeout syntax and how it wors.
setTimeout(function (){
    console.log("Hi Hiren");
}, 2000)

// By Using Reference => Same O/P

const sayHiren = function() {
    console.log("Hi Hiren");
}
setTimeout(sayHiren, 2000);

// // Change InnerHtTML of code.
document.querySelector('h1').innerHTML = "chai aur Code";

// Using SetTimeout content will change after 2 secs.

const ChangeText = function () {
    document.querySelector('h1').innerHTML = "Chai Aur Code"
}
const stopChange = setTimeout(ChangeText, 2000);

// Using this it will stop the execution after click on stopped.
document.querySelector('#stop').
addEventListener('click', function() {
    clearTimeout(stopChange)
    console.log("stopped");  
})
