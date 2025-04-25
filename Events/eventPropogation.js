// Event Propogation is depends upon true and false. by default it's false so it's called event bubbling and as we right true it become event capturing
// event bubbling
document.getElementById('images').addEventListener('click', function(e){
    console.log("Images clicked");  
})
document.getElementById('owl').addEventListener('click', function(e){
    console.log("Owl clicked");   
}, false)

// O/p:- 
// Owl clicked
// Images clicked

// event Capturing
document.getElementById('images').addEventListener('click', function(){
    console.log("Iamges Called");
}, true)

document.getElementById('owl').addEventListener('click', function(){
    console.log("owl Called");
}, true)

// O/p:- 
// Images Called
// Owl Called

// Event Prpogation
// It will stop other events jus called only which one we have called.
document.getElementById('images').addEventListener('click', function(e){
    console.log("Images Called third");
    
})

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl Called third");
    e.stopPropagation()
})

// // O/P:- owl Called third 

// Google will not open cz of preventDefault
document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation()
        console.log("google clicked");
    }, false)
