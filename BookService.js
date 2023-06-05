"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
var BookService = /** @class */ (function () {
    function BookService() {
        this.books = [];
        this.nextId = 1;
    }
    // Create a new book
    BookService.prototype.createBook = function (book) {
        book.id = this.nextId++;
        this.books.push(book);
    };
    // Read all books
    BookService.prototype.getAllBooks = function () {
        return this.books;
    };
    // Read a specific book by ID
    BookService.prototype.getBookById = function (id) {
        return this.books.find(function (book) { return book.id === id; });
    };
    // Update a book
    BookService.prototype.updateBook = function (book) {
        var index = this.books.findIndex(function (b) { return b.id === book.id; });
        if (index !== -1) {
            this.books[index] = book;
        }
    };
    // Delete a book
    BookService.prototype.deleteBook = function (id) {
        var index = this.books.findIndex(function (b) { return b.id === id; });
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    };
    return BookService;
}());
exports.BookService = BookService;
