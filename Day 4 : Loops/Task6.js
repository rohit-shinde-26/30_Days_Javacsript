// Task 6 : Write a program to calculate factorial using do while loop.


let factorial = 1;
let i = 1;
let num = +prompt("Enter value of num");


if (num < 0) {
    console.log("Factorial is not defined for negative numbers");
} else {
  
    do {
        factorial *= i;
        i++;
    } while (i <= num);

    console.log(`The factorial of ${num} is: ${factorial}`);
}
