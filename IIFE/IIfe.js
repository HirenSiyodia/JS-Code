// As soon as we write a function it should be execute ASAP.

function chai(){
    console.log("DB One Executed");
}
chai(); // if you want to use two functions ata time then use ";"

(function aurcode(){
    console.log("DB two Executed");
}) ();


// Using arrow Method
((name) => {console.log(`DB three Executed ${name}`); }) ("Hiren")




