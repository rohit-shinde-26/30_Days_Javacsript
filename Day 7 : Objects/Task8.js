// Task 8 : Use for...in loop to iterate over the properties of the book object and log each property and its value.


// Define the book object
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel"
};

// Iterate over the properties of the book object using for...in loop
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}
