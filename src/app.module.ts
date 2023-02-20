import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmDataSource } from './data-source';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmDataSource), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
