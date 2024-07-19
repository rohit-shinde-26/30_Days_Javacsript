// Task 3 : Add a method to the book object and returns a string with a book title and author, and the log the result this method.



function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getInfo = function() {
    return `${this.title} by ${this.author}`;
};


let book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');


console.log(book1.getInfo()); 
