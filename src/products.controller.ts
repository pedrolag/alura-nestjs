import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {

    @Get()
    getAll(): string {
        return 'List all products';
    }

    @Get(':id')
    get(@Param() params): string {
        return `Returns the product with id=${params.id}`;
    }

    @Post()
    add(@Body() produto): string {
        console.log(produto);
        return 'Product added';
    }

    @Put()
    change(@Body() produto): string {
        console.log(produto);
        return 'Product changed';
    }

    @Delete(':id')
    delete(@Param() params): string {
        return `Product ${params.id} deleted` 
    }

}