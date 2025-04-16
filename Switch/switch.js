const month = 4;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    default:
        console.log("Dafault Value");
        break;
}
// Switch case is used for when we get a single value for multiple data so easier than if.. else conditon.


//Below for a "string value"
let uName = "Hiren"

switch (uName) {
    case "yash":
        console.log("Hello Yash");
        break;
    case "hiren":
        console.log("Hello Hiren Siyodia");
        break;

    default:
        console.log("Hi User..");
        break;
}