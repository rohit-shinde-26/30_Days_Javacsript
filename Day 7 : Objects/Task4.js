
// Task 4 : Add a method to the book object that makes a parameter (year) and updates the book year property then log the updated object. 

// Define the book object
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel",
};

// Add a method to the book object to update the year
book.updateYear = function(newYear) {
    this.year = newYear;
};

// Example usage: Update the year to 2024
book.updateYear(2024);

// Log the updated book object
console.log(book);
