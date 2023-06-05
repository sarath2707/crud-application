
export interface novels {
    id: any;
    title: string;
    author: string;
  }
  
  class BookService1 {
    deleteBook: any;
    updateBook: any;
    getBookById: any;
    getAllBooks() {
      throw new Error("Method not implemented.");
    }
    createBook(arg0: { id: number; title: string; author: string; }) {
      throw new Error("Method not implemented.");
    }
    // Implementation of CRUD operations goes here
  }
  

export { BookService1};