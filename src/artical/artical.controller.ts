import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticalService } from './artical.service';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';

@Controller('artical')
export class ArticalController {
  // constructor(private readonly articalService: ArticalService) {}
  constructor(private readonly articalService: ArticalService) {}

  // 增加文章
  @Post('/add')
  create(@Body() createArticalDto: CreateArticalDto) {
    console.log(createArticalDto, 'createArticalDto1');
    return this.articalService.create(createArticalDto);
  }

  //删除文章
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.articalService.remove(+id);
  }

  // 修改文章
  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateInfo: CreateArticalDto) {
    return this.articalService.upDateArtical(+id, updateInfo);
  }

  // 查文章
  @Get('/all')
  findAll() {
    return this.articalService.findAll();
  }
  // @Get()
  // findAll() {
  //   return this.articalService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.articalService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateArticalDto: UpdateArticalDto) {
  //   return this.articalService.update(+id, updateArticalDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.articalService.remove(+id);
  // }
}
