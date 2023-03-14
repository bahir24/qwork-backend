import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "../../schemas/category.schema";

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {
    console.log('testService run');
  }
  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find();
  }
  async sendCategory(data): Promise<Category> {
    const categoryData = new this.categoryModel(data);
    return categoryData.save();
  }
  
  
}
