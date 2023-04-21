import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { Artical } from './entities/artical.entity';
import { Repository, EntityManager, DataSource } from 'typeorm';
import { Tag } from './entities/tag.entity';

@Injectable()
export class ArticalService {
  constructor(
    @InjectRepository(Artical)
    private readonly articalRepository: Repository<Artical>,
    // private readonly tagRepository: Repository<Tag>,
    private readonly entityManager: EntityManager, // private dataSource: DataSource,
  ) {}

  // 增加文章接口
  async create(createArticalDto: CreateArticalDto) {
    // const queryRunner = this.dataSource.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // try {
    //   await queryRunner.manager.save(users[0]);
    //   await queryRunner.manager.save(users[1]);

    //   await queryRunner.commitTransaction();
    // } catch (err) {
    //   //如果遇到错误，可以回滚事务
    //   await queryRunner.rollbackTransaction();
    // } finally {
    //   //你需要手动实例化并部署一个queryRunner
    //   await queryRunner.release();
    // }
    console.log(createArticalDto, 'CreateArticalDto22');
    await this.articalRepository.save(createArticalDto);
    return {
      data: {},
      message: 'add success',
    };
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
        data: {
          id,
        },
        message: 'delete success',
      };
    } catch (error) {
      return {
        code: 500,
        data: {},
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
        data: {},
        message: 'update success',
      };
    } catch (error) {
      return {
        code: 500,
        data: {},
        message: error,
      };
    }
  }

  // 查找文章
  async findAll(id: number) {
    const list = await this.articalRepository.find();
    const categoriesWithQuestions = await this.articalRepository
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.tags', 'tag')
      .where('tag.id = :id', { id: id })
      .getMany();
    return {
      data: { list, categoriesWithQuestions },
      message: 'search success',
    };
  }
}
