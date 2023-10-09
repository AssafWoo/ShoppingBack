// product.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './products.service';
import { Product } from './interface/product.interface';

const CATEGORY_MAP = {
  product1: 'category1',
  product2: 'category2',
  // ... other products and their categories
};

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    createProductDto.category =
      CATEGORY_MAP[createProductDto.name] || 'unknown'; // default to 'unknown' if not found in the map
    return await this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  // Add other necessary endpoints like get a specific product, update, delete, etc.
}
