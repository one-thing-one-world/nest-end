import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ArticalModule } from './artical/artical.module';
import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './user/users.module';
import { UsersModule } from './users/users.module';
import { HttpExceptionFilter } from './utils/filter/http-exception.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'liujuncai',
      password: '123456',
      database: 'book',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CatsModule,
    ArticalModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class AppModule {}
