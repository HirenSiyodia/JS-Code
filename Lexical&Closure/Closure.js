// Closure:- A closure is a function that remembers and has access to variables from its lexical scope, even after the outer function has finished executing.
function outer(){
    const name = "Hiren";
    return () => {
        console.log(name);
    }
}
const result = outer();
result()
