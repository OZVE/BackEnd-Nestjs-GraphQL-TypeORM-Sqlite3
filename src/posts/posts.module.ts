import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsService, PostsResolver]
})
export class PostsModule {}
