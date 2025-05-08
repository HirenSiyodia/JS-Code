// Outer function cannot use the data of inner o innerTwo but inner and innerTwo can access.
// Simple as child can access the data but parent can't use it.
function outer(){
    let name = "Hiren"
      
    function inner(){
        let age = 28;
        console.log(name);
        console.log(`your age in inner one ${age}`);        
    }
    function innerTwo(){
        let email = "h@gmail.com";
        console.log(name);
        console.log(`inner two content ${email}`);        
    }

    inner();
    innerTwo();
}
outer();
