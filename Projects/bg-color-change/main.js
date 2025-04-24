const body = document.querySelector('body');
const mainBtn = document.querySelector('.btn');

mode= false;

mainBtn.addEventListener( 'click', function(){
    if (mode) {
        body.classList.add('bg-light');
        body.classList.remove('bg-dark');
        mode = false;
    } else {
        body.classList.add('bg-dark');
        body.classList.remove('bg-light');
        mode = true;
    }

})