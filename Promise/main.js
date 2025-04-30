// Promise One
const newPromise = new Promise (function (resolve, reject) {
    setTimeout(function(){
        console.log("Aysnc task is complete");
        resolve() //Its needed to execute the "then" code.
    } ,1000)
})
// Resolve is direct connected to 'then'
newPromise.then(function(){
    console.log("Promised consumed.");
})

// Promise Two:-
new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Task 2 has executed");
        resolve()
    },1000)
}).then(function(){
    console.log("promise two consumed"); 
})

// Promise Three:- using callbacks()
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Hiren Siyodia", email:"hiren@gmail.com", task: "task 3 executed"})
    },1000)
}).then((value)=>{
    console.log(`Username is : ${value.username}`); 
    console.log(value);
})

// Promise Four:-
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // let error= false; Depend upon error
        if(!error){
        resolve({userName:"Hiren", id:"Hiren@gmail.com"})
    }else {
        reject("error occured");
    }
    },1000)
}).then((value)=>{
    console.log(value)
    return value.userName  
}).then((userName)=>{
    console.log(userName)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("succesfully");
})