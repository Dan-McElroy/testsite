import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";

const resolvers = {
  Query: {
    blogs: () => blogs,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

const blogs = [
  {
    title: "Test 1",
    id: "1111",
    date: "12th June 2013",
    content: "This is a test",
  },
  {
    title: "Test 2",
    id: "jsakdo",
    date: "4th September 2022",
    content: "This is another test",
  },
];
