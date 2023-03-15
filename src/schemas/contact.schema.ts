import mongoose, { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IContact} from "../interfaces/contact";
import { City } from "./city.schema";
import { Geo } from "./geo.schema";

export type ContactDocument = HydratedDocument<Contact>;

@Schema()
export class Contact implements IContact {
  @Prop()
  email: string;
  @Prop()
  address: string;
  @Prop()
  city: City;
  @Prop()
  phone: string;
  @Prop()
  geo: Geo;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
