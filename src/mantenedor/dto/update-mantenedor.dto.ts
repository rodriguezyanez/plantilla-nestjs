import { PartialType } from '@nestjs/mapped-types';
import { CreateMantenedorDto } from './create-mantenedor.dto';

export class UpdateMantenedorDto extends PartialType(CreateMantenedorDto) {}
