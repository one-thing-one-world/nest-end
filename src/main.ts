import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './utils/filter/http-exception.filter';
import { NotHttpExceptionFilter } from './utils/filter/not-http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new NotHttpExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
