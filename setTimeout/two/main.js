// setInterval => Using setInterval content will repetedly execute in one second.
setInterval(function (){
    console.log("Hi Hiren", Date.now())
}, 1000)

// using three parameter 
const sayDate = function (str){
    console.log(str, Date.now())
}
setInterval(sayDate, 1000, "Hi Hiren") // Parameter

// Clear Interval -> It will stop execution 
const sayDate = function (str){
    console.log(str, Date.now())
}
const intervalId = setInterval(sayDate, 1000, "Hi Hiren")

clearInterval(intervalId);

// Start and stop program

const saydate = function(str){
    console.log(str , Date.now())
}
let Interval = document.querySelector("#start")
.addEventListener('click', function(){
 Interval = setInterval (saydate, 2000, 'Hi Hiren')

} )
document.querySelector("#stop")
.addEventListener ("click", function(){
    clearInterval (Interval)
}) 


