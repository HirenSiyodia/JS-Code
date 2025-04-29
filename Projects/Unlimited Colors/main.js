const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let IntervalId;
const startChangingColor = function(){
    if(!IntervalId){
        IntervalId = setInterval (changeBgColor, 1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    } 
};
const stopChangingColor = function() {
    clearInterval(IntervalId);
    IntervalId = null; //Derefernce value
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)