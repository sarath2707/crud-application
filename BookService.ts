import { values } from "./values";
import { novels } from "./books"

class BookService {
  private books: novels[];
  private nextId: number;

  constructor() {
    this.books = [];
    this.nextId = 1;
  }

  // Create a new book
  createBook(book: values): void {
    book.id = this.nextId++;
    this.books.push(book);
  }

  // Read all books
  getAllBooks(): values[] {
    return this.books;
  }  

  // Read a specific book by ID
  getBookById(id: number): values | undefined {
    return this.books.find((book) => book.id === id);
  }

  // Update a book
  updateBook(book: novels): void {
    const index = this.books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
  }

  // Delete a book
  deleteBook(id: number): void {
    const index = this.books.findIndex((b) => b.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}

export { BookService}