import { Schema } from "mongoose";
import { IFilter } from "../interfaces/filter";

export class FilterDto implements IFilter {
  category: Schema.Types.ObjectId;
}
