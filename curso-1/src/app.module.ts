import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book.model';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'bookstore',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([
      Book
    ])
  ],
  controllers: [
    AppController,
    BooksController
  ],
  providers: [
    AppService,
    BooksService
  ],
})
export class AppModule { }
