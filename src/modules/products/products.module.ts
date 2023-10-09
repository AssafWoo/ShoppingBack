// product.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],  // Exporting ProductService

})
export class ProductModule {}
