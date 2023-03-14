import { Test, TestingModule } from '@nestjs/testing';
import { StrengthsService } from './strengths.service';

describe('StrengthsService', () => {
  let service: StrengthsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrengthsService],
    }).compile();

    service = module.get<StrengthsService>(StrengthsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
