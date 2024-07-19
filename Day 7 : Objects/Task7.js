// Task 7 : Add a method to the book object that uses the this keyword to return a string with book title and year and log the result of calling this method in console.

// Define the book object with a method
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel",
    // Method to return book title and year
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};

// Call the method and log the result
console.log(book.getTitleAndYear());
