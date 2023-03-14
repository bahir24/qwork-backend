import { Test, TestingModule } from '@nestjs/testing';
import { StrengthsController } from './strengths.controller';

describe('StrengthsController', () => {
  let controller: StrengthsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrengthsController],
    }).compile();

    controller = module.get<StrengthsController>(StrengthsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
