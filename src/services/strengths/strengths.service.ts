import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Strength, StrengthDocument } from "../../schemas/strength.schema";
import { Model } from "mongoose";
import { Contact } from "../../schemas/contact.schema";

@Injectable()
export class StrengthsService {
  constructor(@InjectModel(Strength.name) private strengthModel: Model<StrengthDocument>) {
    console.log('testService run');
  }
  async getAllStrengths(): Promise<Strength[]> {
    return this.strengthModel.find();
  }
  async sendStrength(data): Promise<Strength[]> {
    return this.strengthModel.insertMany(data);
  }
}
