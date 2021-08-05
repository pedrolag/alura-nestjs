import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './book.model';
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) {

    }

    @Get()
    async selectAll(): Promise<Book[]> {
        return this.booksService.selectAll();
    }

    @Get(':id')
    async select(@Param() params): Promise<Book> {
        return this.booksService.select(params.id);
    }

    @Post()
    async insert(@Body() book: Book) {
        this.booksService.insert(book);
    }

    @Put()
    async update(@Body() book: Book): Promise<[number, Book[]]> {
        return this.booksService.update(book);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.booksService.delete(params.id);
    }

}