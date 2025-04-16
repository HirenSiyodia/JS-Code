// basically it grab the first value.
let a = 10 ?? null

console.log(a);

// but when there is a null or undefined it will directly goes for the second value. This will useful in large data program.
let b = null ?? 15

console.log(b);

// Samefor undefined.
let c = undefined ?? 25

console.log(c);
