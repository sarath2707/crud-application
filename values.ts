
import { BookApp } from "./BookApp";
import { BookService } from "./BookService";
import { BookService1 } from "./books";


export interface values {
    id: any;
    title: string;
    author: string;
  }
  
  const novel: values[] = [
    {id: undefined, title: 'Book 1', author: 'Author 1' },
    { id: undefined, title: 'Book 2', author: 'Author 2' },
    { id: undefined, title: 'Book 3', author: 'Author 3' },
  ];
  
  for (const books of novel) {
    console.log(`Title: ${books.title}, Author: ${books.author}`);
  }

  