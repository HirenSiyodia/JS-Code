function cartTotal(anyobject){
    console.log(`username is ${anyobject.name} and the cart value is ${anyobject.value}`);
}
cartTotal ({
    name: "hiren",
    value: 999
})
// We can directly use objects into cartTotal and using anyobject we can define anyobject when we dont know the specific object name.