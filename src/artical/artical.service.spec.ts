import { Test, TestingModule } from '@nestjs/testing';
import { ArticalService } from './artical.service';

describe('ArticalService', () => {
  let service: ArticalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticalService],
    }).compile();

    service = module.get<ArticalService>(ArticalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
