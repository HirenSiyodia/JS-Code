const course = {
    courseName:"JS-Tutorial",
    CourseID: 9981,
    CourseFacultyName: "HirenSir"
}
// Destructure a big object code and you can give a short name using ":"
const {CourseFacultyName:fName} = course; // "{}" this means Destructure
console.log(fName); //Calling CourseFacultyName using fName
