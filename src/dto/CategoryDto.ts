import { Category } from "../schemas/category.schema";

export class CategoryDto implements Category {
  title: string;
  desc: string;
  icon: string;
}
