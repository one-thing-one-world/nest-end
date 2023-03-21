import { Test, TestingModule } from '@nestjs/testing';
import { ArticalController } from './artical.controller';
import { ArticalService } from './artical.service';

describe('ArticalController', () => {
  let controller: ArticalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticalController],
      providers: [ArticalService],
    }).compile();

    controller = module.get<ArticalController>(ArticalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
