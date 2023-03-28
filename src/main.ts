import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as http from 'http';
import * as https from 'https';
import { join } from 'path';
async function bootstrap() {
  // const apiSecret = fs
  //   .readFileSync(
  //     join(process.cwd(), './utils/ssl/7802960_www.flyfrag.cn_public.crt'),
  //   )
  //   .toString();
  console.log(process.cwd(), '/src/utils/ssl/7802960_www.flyfrag.cn_chain.crt');
  const httpsOptions = {
    ca: fs
      .readFileSync(
        join(process.cwd(), '/src/utils/ssl/7802960_www.flyfrag.cn_chain.crt'),
      )
      .toString(),
    key: fs
      .readFileSync(
        join(process.cwd(), '/src/utils/ssl/7802960_www.flyfrag.cn.key'),
      )
      .toString(),
    cert: fs
      .readFileSync(
        join(process.cwd(), '/src/utils/ssl/7802960_www.flyfrag.cn_public.crt'),
      )
      .toString(),
  };

  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors();
  await app.init();

  http.createServer(server).listen(3000);
  https.createServer(httpsOptions, server).listen(443);
  // await app.listen(3000);
}
bootstrap();
