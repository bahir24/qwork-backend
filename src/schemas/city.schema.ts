import mongoose, { HydratedDocument, model } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ICity } from "../interfaces/contact";

export type CityDocument = HydratedDocument<City>;

@Schema()
export class City implements ICity {
  @Prop()
  title: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
