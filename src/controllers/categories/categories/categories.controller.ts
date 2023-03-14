import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoriesService } from "../../../services/categories/categories.service";
import { Category } from "../../../schemas/category.schema";
import { CategoryDto } from "../../../dto/CategoryDto";

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAllCategories(): Promise<Category[]> {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  sendCategory(@Body() data: CategoryDto): Promise<Category> {
    return this.categoriesService.sendCategory(data);
  }
}
