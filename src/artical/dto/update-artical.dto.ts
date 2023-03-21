import { PartialType } from '@nestjs/mapped-types';
import { CreateArticalDto } from './create-artical.dto';

export class UpdateArticalDto extends PartialType(CreateArticalDto) {}
