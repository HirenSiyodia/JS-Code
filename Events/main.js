//This is how we can pass alert message instead of onClick() event in HTML. OLD METHOD
document.getElementById('owl').onclick = function() {
    alert('Hello OWL');
}

// New Method using addEventListner
document.getElementById('owl').addEventListener('click', function(){
alert('Hi, I am Owl');
})
