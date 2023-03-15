import { Photo } from "../schemas/photo.schema";
import { Schema } from "mongoose";

export class PhotoDto implements Photo {
  img: string;
  thumb: string;
  service: Schema.Types.ObjectId;
  alt: string;
}
