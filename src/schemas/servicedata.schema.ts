import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IServiceData } from "../interfaces/service";

export type ServiceDataDocument = HydratedDocument<ServiceData>;

@Schema()
export class ServiceData implements IServiceData {
  @Prop()
  key: string
  @Prop()
  value: string
}

export const ServiceDataSchema = SchemaFactory.createForClass(ServiceData);
