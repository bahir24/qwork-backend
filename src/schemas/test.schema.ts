import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ITest } from '../interfaces/test';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test implements ITest {
  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop()
  img: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
