import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './book.model';
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) {

    }

    @Get()
    selectAll(): Book[] {
        return this.booksService.selectAll();
    }

    @Get(':id')
    select(@Param() params): Book {
        return this.booksService.select(params.id);
    }

    @Post()
    insert(@Body() book: Book): void {
        this.booksService.insert(book);
    }

    @Put()
    update(@Body() book: Book): Book {
        return this.booksService.update(book);
    }

    @Delete(':id')
    delete(@Param() params): void {
        this.booksService.delete(params.id);
    }

}