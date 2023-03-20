import { IService } from "../interfaces/service";
import { Category } from "./category.schema";
import { ServiceData } from "./servicedata.schema";
import { HydratedDocument, Schema as STypes } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ServiceDocument = HydratedDocument<Service>;

@Schema()
export class Service implements IService {
  @Prop()
  _id?: STypes.Types.ObjectId;
  @Prop()
  title: string;
  @Prop()
  subTitle: string;
  @Prop({ref:'Category'})
  category: STypes.Types.ObjectId;
  @Prop()
  data: ServiceData[];
  @Prop()
  img: string;
  @Prop()
  thumb: string;
  @Prop()
  desc: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
