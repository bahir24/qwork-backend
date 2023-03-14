import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test, TestDocument } from '../../schemas/test.schema';
import { Model } from 'mongoose';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {
    console.log('testService run');
  }
  async getAllTests(): Promise<Test[]> {
    return this.testModel.find();
  }
  async sendTest(data): Promise<Test> {
    // console.log('data ', data);
    const testData = new this.testModel(data);
    // console.log('userdata saved ' + userData);
    // return new Promise((resolve) => true);
    return testData.save();
  }
}
