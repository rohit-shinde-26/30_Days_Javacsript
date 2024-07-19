// Task 6 : Access and log the name of the library and the title of the book in the library.

// Define the library object (same as before)
let library = {
    name: "Public Library",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Novel"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            genre: "Novel"
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
            genre: "Dystopian"
        }
    ]
};

// Access and log the name of the library
console.log("Library Name:", library.name);

// Access and log the title of each book in the library
console.log("Books in the Library:");
library.books.forEach(book => {
    console.log("- " + book.title);
});

