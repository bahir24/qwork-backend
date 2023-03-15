import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as STypes } from "mongoose";
import { IPhoto } from "../interfaces/photo";

export type PhotoDocument = HydratedDocument<Photo>;

@Schema()
export class Photo implements IPhoto {
  @Prop()
  img: string;

  @Prop()
  thumb: string;

  @Prop({ref:'Service'})
  service: STypes.Types.ObjectId;

  @Prop()
  alt: string;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);
