// product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface';

const CATEGORY_MAP = {
  product1: 'category1',
  product2: 'category2',
  // ... other products and their categories
};

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const category = this.determineCategory(createProductDto.name);
    const createdProduct = new this.productModel({
      ...createProductDto,
      category,
    });
    return await createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }
  
  determineCategory(productName: string): string {
    return CATEGORY_MAP[productName] || 'unknown';
  }

  async findByName(productName: string): Promise<Product | null> {
    return await this.productModel.findOne({ name: productName }).exec();
  }
}
