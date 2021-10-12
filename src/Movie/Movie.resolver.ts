import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Movie } from "./Movie.entity";

@InputType()
class MovieInput {
  @Field()
  title: string;

  @Field(() => Int)
  minutes: number;

  @Field()
  genre: string;
}

@Resolver()
export class MovieResolver {
  @Query(() => String)
  hi() {
    return `hello`;
  }
  @Mutation(() => Movie)
  async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
    const movie = await Movie.create(options).save();
    return movie;
  }

  @Query(() => [Movie] || null)
  movies() {
    return Movie.find();
  }
}
