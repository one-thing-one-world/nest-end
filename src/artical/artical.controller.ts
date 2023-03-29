import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ArticalService } from './artical.service';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('artical')
export class ArticalController {
  // constructor(private readonly articalService: ArticalService) {}
  constructor(private readonly articalService: ArticalService) {}

  // 增加文章
  @UseGuards(AuthGuard('jwt'))
  @Post('/add')
  @HttpCode(200)
  create(@Body() createArticalDto: CreateArticalDto) {
    console.log(createArticalDto, 'createArticalDto1');
    return this.articalService.create(createArticalDto);
  }

  @UseGuards(AuthGuard('jwt'))
  //删除文章
  @HttpCode(200)
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.articalService.remove(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  // 修改文章
  @HttpCode(200)
  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateInfo: CreateArticalDto) {
    return this.articalService.upDateArtical(+id, updateInfo);
  }

  // 查文章
  @Get('/all')
  @HttpCode(200)
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
