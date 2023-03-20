import { ICategory } from "../interfaces/category";
import { HydratedDocument, Schema as STypes } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category implements ICategory {
  @Prop({ref:'Service'})
  services!: STypes.Types.ObjectId[];
  
  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop()
  icon: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
