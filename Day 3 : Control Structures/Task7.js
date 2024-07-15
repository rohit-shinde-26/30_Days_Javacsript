// Task 7 : Write a program to check if year is leap year using multiple conditions (divisible by 4 but not 100 unless also divisible by 400) and log the result to the console.


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


const testYears = [2000, 2004, 2100, 2021, 2024];

testYears.forEach(year => {
    if (isLeapYear(year)) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
});
