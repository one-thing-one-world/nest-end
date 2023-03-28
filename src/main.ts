import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    ca: fs.readFileSync('./utils/ssl/7802960_www.flyfrag.cn_chain.crt'),
    key: fs.readFileSync('./utils/ssl/7802960_www.flyfrag.cn.key'),
    cert: fs.readFileSync('./utils/ssl/7802960_www.flyfrag.cn_public.crt'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
