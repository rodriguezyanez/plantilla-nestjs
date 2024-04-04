import { Injectable } from '@nestjs/common';
import { CreateMantenedorDto } from './dto/create-mantenedor.dto';
import { UpdateMantenedorDto } from './dto/update-mantenedor.dto';

@Injectable()
export class MantenedorService {
  create(createMantenedorDto: CreateMantenedorDto) {
    return 'This action adds a new mantenedor';
  }

  findAll() {
    return `This action returns all mantenedor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mantenedor`;
  }

  update(id: number, updateMantenedorDto: UpdateMantenedorDto) {
    return `This action updates a #${id} mantenedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} mantenedor`;
  }
}
