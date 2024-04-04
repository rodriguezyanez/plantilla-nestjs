import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MantenedorModule } from './mantenedor/mantenedor.module';

@Module({
  imports: [MantenedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
