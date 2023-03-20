import { Category } from "../schemas/category.schema";
import { Schema } from "mongoose";
import { ServiceDto } from "./ServiceDto";

export class CategoryDto implements Category {
  // id?: string;
  title: string;
  desc: string;
  icon: string;
  services!: Schema.Types.ObjectId[]
}

export class CategoryWithServicesDto implements Omit<CategoryDto, "services"> {
  title: string;
  desc: string;
  icon: string;
  services: [ServiceDto]
}
