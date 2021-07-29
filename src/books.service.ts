import { Injectable } from "@nestjs/common";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
    books: Book[] = [
        new Book("BOOK01", "Book 1", 30.90),
        new Book("BOOK02", "Book 2", 40.90),
        new Book("BOOK03", "Book 3", 50.90),
    ]; 

    selectAll(): Book[] {
        return this.books;
    }

    select(id: number): Book {
        return this.books[id];
    }

    insert(book: Book): void {
        this.books.push(book);
    }

    update(book: Book): Book {
        return book;
    }

    delete(id: number): void {
        this.books.splice(id, 1);
    }
}