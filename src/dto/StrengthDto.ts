import { Strength } from "../schemas/strength.schema";

export class StrengthDto implements Strength {
  title: string;
  desc: string;
  img: string;
  thumb: string;
}
