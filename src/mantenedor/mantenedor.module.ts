import { Module } from '@nestjs/common';
import { MantenedorService } from './mantenedor.service';
import { MantenedorController } from './mantenedor.controller';

@Module({
  controllers: [MantenedorController],
  providers: [MantenedorService],
})
export class MantenedorModule {}
