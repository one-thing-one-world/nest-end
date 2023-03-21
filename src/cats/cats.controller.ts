import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Request } from 'express';
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // @Post()
  // create(@Body() createCatDto: CreateCatDto) {
  //   return this.catsService.create(createCatDto);
  // }

  @Post('/create')
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto, 'createCatDtocreateCatDto');
    // const obj = {
    //   name: 'cat1',
    //   desc: 'this is cat1 desc',
    // };
    return this.catsService.create(createCatDto);
    // return this.catsService.create(obj);
  }

  @Get()
  findAll(@Req() req: Request) {
    console.log('RequestRequest', req.query, req);
    return this.catsService.findAll(req.query.sex as string);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
