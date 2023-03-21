import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { Artical } from './entities/artical.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticalService {
  constructor(
    @InjectRepository(Artical)
    private readonly articalRepository: Repository<Artical>,
  ) {}

  // 增加文章接口
  async create(createArticalDto: CreateArticalDto) {
    console.log(createArticalDto, 'CreateArticalDto22');
    try {
      await this.articalRepository.save(createArticalDto);
      return {
        code: 200,
        message: 'add success',
      };
    } catch (err) {
      return {
        code: 400,
        message: err,
      };
    }
  }

  // findAll() {
  //   return `This action returns all artical`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} artical`;
  // }

  // update(id: number, updateArticalDto: UpdateArticalDto) {
  //   return `This action updates a #${id} artical`;
  // }
  // 删除文章
  async remove(id: number) {
    await this.articalRepository.delete(id);
    try {
      return {
        code: 200,
        data: id,
        message: 'delete success',
      };
    } catch (error) {
      return {
        code: 400,
        message: error,
      };
    }
  }

  // 更新文章
  async upDateArtical(id: number, updateInfo: CreateArticalDto) {
    try {
      await this.articalRepository.update(id, { ...updateInfo });
      return {
        code: 200,
        message: 'update success',
      };
    } catch (error) {
      return {
        code: 400,
        message: error,
      };
    }
  }

  // 查找文章
  async findAll() {
    try {
      const list = await this.articalRepository.find();
      return {
        code: 200,
        data: list,
        message: 'search success',
      };
    } catch (error) {
      return {
        code: 400,
        message: error,
      };
    }
  }
}
