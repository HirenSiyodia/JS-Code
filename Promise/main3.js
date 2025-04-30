// Live data from server

async function getAllUsers() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json() // Here await is IMP as without it data won't come as it takes time.
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers()

// using 'then' and 'catch'
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data) //data will store whats will return from response. you can write anything in response and data
}).catch((error)=>{
    console.log(error)
})