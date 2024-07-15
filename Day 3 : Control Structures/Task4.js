// Task 4 : Write a program to use switch case to determine the day of week based on number and log the day name in console.
let day = +prompt("Enter day number")


switch(day){
    case 1 :
        console.log("Monday")
    break;
    case 2 :
        console.log("Tuesday")
    break;
    case 3 :
        console.log("Wednesday")
    break;
    case 4 :
        console.log("Thursday")
    break;
    case 5 :
        console.log("Friday")
    break;
    case 6 :
        console.log("Saturday")
    break;
    case 7 :
        console.log("Sunday")
    break;
    default :
        console.log("Check your number")
}