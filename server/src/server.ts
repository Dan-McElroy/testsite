import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./schema/types";
import resolvers from "./schema/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
