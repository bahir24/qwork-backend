import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "../../schemas/category.schema";
import { Service } from "../../schemas/service.schema";

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {
  }
  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find();
  }
  async sendCategories(data): Promise<Category[]> {
    return this.categoryModel.insertMany(data);
  }
  
  
  
  
}
