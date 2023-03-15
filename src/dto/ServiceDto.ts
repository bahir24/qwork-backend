import { Service } from "../schemas/service.schema";
import { ServiceData } from "../schemas/servicedata.schema";
import { Schema } from "mongoose";

export class ServiceDto implements Service {
  title: string;
  subTitle: string;
  category: Schema.Types.ObjectId;
  data: ServiceData[];
  img: string;
  thumb: string;
  desc: string;
}
