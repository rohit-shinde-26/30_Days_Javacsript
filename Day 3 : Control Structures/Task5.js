// Task 5 : Write a program to use switch case to assign a grade based on score and log the grade on console.


let score = +prompt("Enter the score")

switch(score){
    case 100:
        console.log("A+ grade")
    break;
    case 90:
        console.log("A grade")
    break;
    case 80:
        console.log("B+ grade")
    break;
    case 70:
        console.log("B grade")
    break;
    case 60:
        console.log("C grade")
    break;
    case 50:
        console.log("D grade")
    break;
    default:
        console.log("You are failed")
}