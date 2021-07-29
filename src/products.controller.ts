import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from './product.model';

@Controller('products')
export class ProductsController {

    products: Product[] = [
        new Product("BOOK01", "Book 1", 30.90),
        new Product("BOOK02", "Book 2", 40.90),
        new Product("BOOK03", "Book 3", 50.90),
    ]; 

    @Get()
    getAll(): Product[] {
        return this.products;
    }

    @Get(':id')
    get(@Param() params): Product {
        return this.products[params.id];
    }

    @Post()
    add(@Body() produto: Product): void {
        this.products.push(
            new Product(produto.code, produto.name, produto.price),
        );
    }

    @Put()
    change(@Body() produto: Product): Product {
        return produto;
    }

    @Delete(':id')
    delete(@Param() params): void {
        this.products.splice(params.id, 1);
    }

}