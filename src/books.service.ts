import { Inject } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./book.model";

@Injectable()
export class BooksService { 

    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book
    ) {}

    async selectAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async select(id: number): Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    async insert(book: Book) {
        this.bookModel.create(book);
    }

    async update(book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
            where: {
                id: book.id
            }
        });
    }

    async delete(id: number) {
        const book: Book = await this.select(id);
        book.destroy();
    }
}