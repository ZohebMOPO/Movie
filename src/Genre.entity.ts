import { Field, Int, ObjectType } from "type-graphql";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class Genre {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  genreName: string;
}
