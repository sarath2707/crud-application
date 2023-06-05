import { BookService } from "./BookService";
import { novels } from "./books";

class BookApp {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  run(): void {
    // Add initial books
    this.bookService.createBook({ id: 1, title: "Book 1", author: "Author 1" });
    this.bookService.createBook({ id: 2, title: "Book 2", author: "Author 2" });
    this.bookService.createBook({ id: 3, title: "Book 3", author: "Author 3" });

    // Display all books
    this.displayBooks();

    // Wait for user input
    this.promptUser();
  }

  displayBooks(): void {
    console.log("All Books:");
    const books = this.bookService.getAllBooks();
    if (books.length === 0) {
      console.log("No books found.");
    } else {
      books.forEach((book) => {
        console.log(`- ID: ${books}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
    console.log();
  }

  promptUser(): void {
    console.log("Available commands:");
    console.log("1. Add a new book");
    console.log("2. Update a book");
    console.log("3. Delete a book");
    console.log("4. Filter books by author");
    console.log("0. Exit");

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Enter a command: ", (command) => {
      switch (command) {
        case "0":
          console.log("Goodbye!");
          readline.close();
          break;
        case "1":
          this.addBook(readline);
          break;
        case "2":
          this.updateBook(readline);
          break;
        case "3":
          this.deleteBook(readline);
          break;
        case "4":
          this.filterBooksByAuthor(readline);
          break;
        default:
          console.log("Invalid command.");
          readline.close();
          break;
      }
    });
  }

  addBook(readline: any): void {
    readline.question("Enter the title of the book: ", (title: string) => {
      readline.question("Enter the author of the book: ", (author: string) => {
        const newBook: novels = { title, author,
          id: undefined
        };
        this.bookService.createBook(newBook);
        console.log("Book added successfully.");
        console.log();
        this.displayBooks();
        this.promptUser();
      });
    });
  }

  updateBook(readline: any): void {
    readline.question("Enter the ID of the book to update: ", (idInput: string) => {
      const id = parseInt(idInput, 10);
      const book = this.bookService.getBookById(id);
      if (book) {
        readline.question("Enter the new title of the book: ", (title: string) => {
          readline.question("Enter the new author of the book: ", (author: string) => {
            book.title = title;
            book.author = author;
            this.bookService.updateBook(book);
            console.log("Book updated successfully.");
            console.log();
            this.displayBooks();
            this.promptUser();
          });
        });
      } else {
        console.log("Book not found.");
        console.log();
        this.displayBooks();
        this.promptUser();
      }
    });
  }

  deleteBook(readline: any): void {
    readline.question("Enter the ID of the book to delete: ", (idInput: string) => {
      const id = parseInt(idInput, 10);
      this.bookService.deleteBook(id);
      console.log("Book deleted successfully.");
      console.log();
      this.displayBooks();
      this.promptUser();
    });
  }

  filterBooksByAuthor(readline: any): void {
    readline.question("Enter the author to filter by: ", (author: string) => {
      const filteredBooks = this.bookService.getAllBooks().filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase())
      );
      console.log("Filtered Books:");
      if (filteredBooks.length === 0) {
        console.log("No books found for the given author.");
      } else {
        filteredBooks.forEach((novels) => {
          console.log(`- ID: ${novels.id}, Title: ${novels.title}, Author: ${novels.author}`);
        });
      }
      console.log();
      this.promptUser();
    });
  }
}

// Create an instance of the BookApp class and run the application
const app = new BookApp();
app.run();

export {BookApp};