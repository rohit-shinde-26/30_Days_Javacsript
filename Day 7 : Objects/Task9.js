// Task 9 : Use object.keys and object.values methods to log all the keys and values of the book object.


// Define the book object
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel"
};

// Using Object.keys() to log all keys
console.log("Keys:");
Object.keys(book).forEach(key => {
    console.log(key);
});

// Using Object.values() to log all values
console.log("\nValues:");
Object.values(book).forEach(value => {
    console.log(value);
});
