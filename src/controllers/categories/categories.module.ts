import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "../../schemas/category.schema";
import { CategoriesService } from "../../services/categories/categories.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
