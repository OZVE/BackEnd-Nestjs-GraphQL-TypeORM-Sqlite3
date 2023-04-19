import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Query } from '@nestjs/graphql';
import { Post } from './posts.entity';
import { CreatePostInput } from './dto/create-post-input';

@Resolver()
export class PostsResolver {

    constructor(private postsService: PostsService) { }

    @Query((returns)=> [Post])
    posts() {
        return this.postsService.findAll();
    }

    @Mutation((returns) => Post)
    createPost(@Args('postInput') postInput: CreatePostInput){
        return this.postsService.createPost(postInput)
    }

}
