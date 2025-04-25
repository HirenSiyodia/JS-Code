//This is how we can pass alert message instead of onClick() event in HTML. OLD METHOD
document.getElementById('owl').onclick = function() {
    alert('Hello OWL');
}

// New Method using addEventListner
document.getElementById('owl').addEventListener('click', function(){
alert('Hi, I am Owl');
})


// RemoveElement

document.getElementById('images').addEventListener('click', function(e){
    let removeIt = e.target.parentNode;
    removeIt.remove()
    
})

// Only li will remove
document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    
        
    })