import { IStrength } from "../interfaces/strength";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StrengthDocument = HydratedDocument<Strength>;

@Schema()
export class Strength implements IStrength {
  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop()
  img: string;

  @Prop()
  thumb: string;
}

export const StrengthSchema = SchemaFactory.createForClass(Strength);
