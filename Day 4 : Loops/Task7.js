// Task 7 : Write a program to print following pattern using nested loops.
// *
// **
// ***
// ****
// *****

// Define the number of rows for the pattern
const rows = 5;

// Outer loop for rows
for (let i = 1; i <= rows; i++) {
    let pattern = '';

    // Inner loop for columns
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }

    // Print each row
    console.log(pattern);
}
