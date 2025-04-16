// Break will Break the execution from given value and after break nothing will print.
for (let index = 0; index <= 20; index++) {
    if (index == 9) {
        console.log("Numer 9 Detected..");
        break;
    }
    console.log(`Value is: ${index}`);   
}

// Continue will resume his work after a pause. It will allow user to print a further data.
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("number 5 detected.");
        continue;
    }
    console.log(`Value is: ${index}`);    
}
