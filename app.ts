import { BookApp } from "./BookApp";
import { BookService1 } from "./books";
import { BookService } from "./BookService";
import { values } from "./values";


// Create an instance of the BookApp class and run the application
const app = new BookApp();
app.run();

export { app }