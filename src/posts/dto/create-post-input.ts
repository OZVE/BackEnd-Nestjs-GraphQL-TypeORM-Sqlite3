import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";


@InputType()
export class CreatePostInput {
    @MaxLength(10)
    @MinLength(3,{
        message:'titulo demasiado corto, pibe',
    })
    @IsNotEmpty()
    @Field()
    title: string;

    @MaxLength(400)
    @Field({ nullable: true })
    content?: string;
}