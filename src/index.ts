import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { MovieResolver } from "./Movie/Movie.resolver";

(async () => {
  const app = express();

  await createConnection();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [MovieResolver],
    }),
  });

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("Open localhost:4000/graphql");
  });
})();
