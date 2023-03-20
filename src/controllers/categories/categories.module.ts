import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "../../schemas/category.schema";
import { CategoriesService } from "../../services/categories/categories.service";
import { Service, ServiceSchema } from "../../schemas/service.schema";
import { ServicesService } from "../../services/services/services.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema }, 
      { name: Service.name, schema: ServiceSchema }
    ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, ServicesService],
})
export class CategoriesModule {}
