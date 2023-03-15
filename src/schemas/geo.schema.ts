import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IGeo } from "../interfaces/contact";

export type GeoDocument = HydratedDocument<Geo>;

@Schema()
export class Geo implements IGeo {
  @Prop()
  lat: string;
  @Prop()
  lon: string;
}

export const GeoSchema = SchemaFactory.createForClass(Geo);
