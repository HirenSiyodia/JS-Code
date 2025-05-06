function multiPly5(num){
    return num*5;
}
multiPly5.power = 2;

console.log(multiPly5(5)); //25
console.log(multiPly5.power); // 2
console.log(multiPly5.prototype); // {}

function createUser(username, score){
    this.username = username;
    this.score = score;
}