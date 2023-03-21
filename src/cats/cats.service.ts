import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  // create(createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }
  async create(createCatDto: Partial<CreateCatDto>): Promise<Cat> {
    console.log(createCatDto, 'createCatDto2');
    return this.catRepository.save(createCatDto);
  }

  findAll(sex: string) {
    const sexObj = {
      0: '女',
      1: '男',
    };
    return sexObj[sex];
  }

  findOne(id: number) {
    return `This action returns a #${id} catss`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
