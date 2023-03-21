import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ArticalModule } from './artical/artical.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'book',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CatsModule,
    ArticalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
