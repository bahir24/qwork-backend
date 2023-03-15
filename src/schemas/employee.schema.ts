import { ICategory } from "../interfaces/category";
import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IEmployee } from "../interfaces/employee";

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee implements IEmployee {
  @Prop()
  title: string;
  @Prop()
  subTitle: string;
  @Prop()
  desc: string[];
  @Prop()
  img: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
