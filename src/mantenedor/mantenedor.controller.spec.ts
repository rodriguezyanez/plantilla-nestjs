import { Test, TestingModule } from '@nestjs/testing';
import { MantenedorController } from './mantenedor.controller';
import { MantenedorService } from './mantenedor.service';

describe('MantenedorController', () => {
  let controller: MantenedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MantenedorController],
      providers: [MantenedorService],
    }).compile();

    controller = module.get<MantenedorController>(MantenedorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
