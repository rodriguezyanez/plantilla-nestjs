import { Test, TestingModule } from '@nestjs/testing';
import { MantenedorService } from './mantenedor.service';

describe('MantenedorService', () => {
  let service: MantenedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MantenedorService],
    }).compile();

    service = module.get<MantenedorService>(MantenedorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
