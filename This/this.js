let user = {
    userName: "Hiren",
    bookPrice: 335,
    welcomeMessage: function(){
        // "this only use recent scope value. Called "Current Context"
        console.log(`Hello, ${this.userName}, Welcome to he club`);
        console.log(this);
        
    }
    }
user.welcomeMessage()
user.userName = "sam"
user.welcomeMessage()

//Differnce with this and using variable
const chai = ()=>{
    let userName = "jitesh"
    console.log(this.userName);
    console.log(this);
    
}
chai()

//old method
const totalCount = function(num1, num2){
    return num1 + num2
}
const total = totalCount (3, 4);
console.log(total);

//using callback arrow method //Numeric
const totalCount1 = (num3, num4) => (num3 + num4)

console.log(totalCount1 (3, 10));

//using callback arrow method //Object
const family = () => ({user: "Hiren Siyodia"}) 
// Family will automatically be a function so must need to run "()"
console.log(family());
