import { ITest } from '../interfaces/test';

export class TestDto implements ITest {
  title: string;
  desc: string;
  img: string;
}
