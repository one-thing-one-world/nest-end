import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import * as http from 'http';
import * as https from 'https';
async function bootstrap() {
  const httpsOptions = {
    ca: fs.readFileSync('./utils/ssl/7802960_www.flyfrag.cn_chain.crt'),
    key: fs.readFileSync('./utils/ssl/7802960_www.flyfrag.cn.key'),
    cert: fs.readFileSync('./utils/ssl/7802960_www.flyfrag.cn_public.crt'),
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
