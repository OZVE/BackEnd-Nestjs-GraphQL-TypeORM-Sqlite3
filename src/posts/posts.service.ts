import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post-input';



@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private postsRepository: Repository <Post>){}


    async findAll(): Promise <Post[]> {
        return await this.postsRepository.find();
    }

    createPost(post: CreatePostInput): Promise <Post>{
        const newPost = this.postsRepository.create(post);
        return this.postsRepository.save(newPost)
    }
}
