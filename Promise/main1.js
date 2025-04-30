// Aync/Await:-
const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error= true; //Depend upon error
        if(!error){
        resolve({userName:"Hiren", id:"Hiren@gmail.com"})
    }else {
        reject("error occured");
    }
    },1000)
})

async function consumePromiseFive(){
try {
    const response = await PromiseFive
    console.log(response);
} catch (error) {
    console.log(error);
}
}
consumePromiseFive()