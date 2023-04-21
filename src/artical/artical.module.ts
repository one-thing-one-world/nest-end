import { Module } from '@nestjs/common';
import { ArticalService } from './artical.service';
import { ArticalController } from './artical.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artical } from './entities/artical.entity';
import { Tag } from './entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artical, Tag])],
  controllers: [ArticalController],
  providers: [ArticalService],
})
export class ArticalModule {}
