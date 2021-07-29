import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from './product.model';
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {

    }

    @Get()
    selectAll(): Product[] {
        return this.productService.selectAll();
    }

    @Get(':id')
    select(@Param() params): Product {
        return this.productService.select(params.id);
    }

    @Post()
    insert(@Body() product: Product): void {
        this.productService.insert(product);
    }

    @Put()
    update(@Body() product: Product): Product {
        return this.productService.update(product);
    }

    @Delete(':id')
    delete(@Param() params): void {
        this.productService.delete(params.id);
    }

}