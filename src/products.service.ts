import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = [
        new Product("BOOK01", "Book 1", 30.90),
        new Product("BOOK02", "Book 2", 40.90),
        new Product("BOOK03", "Book 3", 50.90),
    ]; 

    selectAll(): Product[] {
        return this.products;
    }

    select(id: number): Product {
        return this.products[id];
    }

    insert(product: Product): void {
        this.products.push(product);
    }

    update(product: Product): Product {
        return product;
    }

    delete(id: number): void {
        this.products.splice(id, 1);
    }
}