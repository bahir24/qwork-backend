import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoriesService } from "../../../services/categories/categories.service";
import { Category } from "../../../schemas/category.schema";
import { CategoryDto } from "../../../dto/CategoryDto";
import { Service } from "../../../schemas/service.schema";

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAllCategories(): Promise<Category[]> {
    console.log('get categories');
    return this.categoriesService.getAllCategories();
  }

  @Post()
  sendCategories(@Body() data: CategoryDto[]): Promise<Category[]> {
    return this.categoriesService.sendCategories(data);
  }
}
