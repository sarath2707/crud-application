"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookApp = void 0;
var BookService_1 = require("./BookService");
var BookApp = /** @class */ (function () {
    function BookApp() {
        this.bookService = new BookService_1.BookService();
    }
    BookApp.prototype.run = function () {
        // Add initial books
        this.bookService.createBook({ id: 1, title: "Book 1", author: "Author 1" });
        this.bookService.createBook({ id: 2, title: "Book 2", author: "Author 2" });
        this.bookService.createBook({ id: 3, title: "Book 3", author: "Author 3" });
        // Display all books
        this.displayBooks();
        // Wait for user input
        this.promptUser();
    };
    BookApp.prototype.displayBooks = function () {
        console.log("All Books:");
        var books = this.bookService.getAllBooks();
        if (books.length === 0) {
            console.log("No books found.");
        }
        else {
            books.forEach(function (book) {
                console.log("- ID: ".concat(books, ", Title: ").concat(book.title, ", Author: ").concat(book.author));
            });
        }
        console.log();
    };
    BookApp.prototype.promptUser = function () {
        var _this = this;
        console.log("Available commands:");
        console.log("1. Add a new book");
        console.log("2. Update a book");
        console.log("3. Delete a book");
        console.log("4. Filter books by author");
        console.log("0. Exit");
        var readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question("Enter a command: ", function (command) {
            switch (command) {
                case "0":
                    console.log("Goodbye!");
                    readline.close();
                    break;
                case "1":
                    _this.addBook(readline);
                    break;
                case "2":
                    _this.updateBook(readline);
                    break;
                case "3":
                    _this.deleteBook(readline);
                    break;
                case "4":
                    _this.filterBooksByAuthor(readline);
                    break;
                default:
                    console.log("Invalid command.");
                    readline.close();
                    break;
            }
        });
    };
    BookApp.prototype.addBook = function (readline) {
        var _this = this;
        readline.question("Enter the title of the book: ", function (title) {
            readline.question("Enter the author of the book: ", function (author) {
                var newBook = { title: title, author: author, id: undefined };
                _this.bookService.createBook(newBook);
                console.log("Book added successfully.");
                console.log();
                _this.displayBooks();
                _this.promptUser();
            });
        });
    };
    BookApp.prototype.updateBook = function (readline) {
        var _this = this;
        readline.question("Enter the ID of the book to update: ", function (idInput) {
            var id = parseInt(idInput, 10);
            var book = _this.bookService.getBookById(id);
            if (book) {
                readline.question("Enter the new title of the book: ", function (title) {
                    readline.question("Enter the new author of the book: ", function (author) {
                        book.title = title;
                        book.author = author;
                        _this.bookService.updateBook(book);
                        console.log("Book updated successfully.");
                        console.log();
                        _this.displayBooks();
                        _this.promptUser();
                    });
                });
            }
            else {
                console.log("Book not found.");
                console.log();
                _this.displayBooks();
                _this.promptUser();
            }
        });
    };
    BookApp.prototype.deleteBook = function (readline) {
        var _this = this;
        readline.question("Enter the ID of the book to delete: ", function (idInput) {
            var id = parseInt(idInput, 10);
            _this.bookService.deleteBook(id);
            console.log("Book deleted successfully.");
            console.log();
            _this.displayBooks();
            _this.promptUser();
        });
    };
    BookApp.prototype.filterBooksByAuthor = function (readline) {
        var _this = this;
        readline.question("Enter the author to filter by: ", function (author) {
            var filteredBooks = _this.bookService.getAllBooks().filter(function (book) {
                return book.author.toLowerCase().includes(author.toLowerCase());
            });
            console.log("Filtered Books:");
            if (filteredBooks.length === 0) {
                console.log("No books found for the given author.");
            }
            else {
                filteredBooks.forEach(function (novels) {
                    console.log("- ID: ".concat(novels.id, ", Title: ").concat(novels.title, ", Author: ").concat(novels.author));
                });
            }
            console.log();
            _this.promptUser();
        });
    };
    return BookApp;
}());
exports.BookApp = BookApp;
// Create an instance of the BookApp class and run the application
var app = new BookApp();
app.run();
