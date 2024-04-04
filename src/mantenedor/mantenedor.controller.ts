import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MantenedorService } from './mantenedor.service';
import { CreateMantenedorDto } from './dto/create-mantenedor.dto';
import { UpdateMantenedorDto } from './dto/update-mantenedor.dto';

@Controller('mantenedor')
export class MantenedorController {
  constructor(private readonly mantenedorService: MantenedorService) {}

  @Post()
  create(@Body() createMantenedorDto: CreateMantenedorDto) {
    return this.mantenedorService.create(createMantenedorDto);
  }

  @Get()
  findAll() {
    return this.mantenedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mantenedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMantenedorDto: UpdateMantenedorDto) {
    return this.mantenedorService.update(+id, updateMantenedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mantenedorService.remove(+id);
  }
}
