import mongoose, { HydratedDocument, ObjectId, Schema as STypes } from "mongoose";
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
  phone: string;
  @Prop()
  geo: Geo;
  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'City'})
  city: City;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
