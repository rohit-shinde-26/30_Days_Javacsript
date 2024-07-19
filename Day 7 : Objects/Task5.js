// Task 5 : Create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console.

// Create book objects
let book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel"
};

let book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Novel"
};

let book3 = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian"
};

// Create the library object
let library = {
    name: "Public Library",
    books: [book1, book2, book3]
};

// Log the library object to the console
console.log(library);
