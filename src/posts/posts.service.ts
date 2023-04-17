import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';



@Injectable()
export class PostsService {

    findAll(): Post[] {
        return [{
            id:1,
            title:'helloworld',
            content:' HOLIS',
        }]
    }
}
