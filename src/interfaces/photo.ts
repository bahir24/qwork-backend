import { Schema } from "mongoose";

export interface IPhoto {
  img: string,
  thumb: string,
  service: Schema.Types.ObjectId,
  alt: string
}
