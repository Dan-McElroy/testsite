import { ApolloServer, gql } from "apollo-server";
//import { typeDefs } from "./schema";
//import resolvers from "./schema/resolvers";

const typeDefs = gql`
  type Blog {
    id: String!
    title: String!
    date: String!
    content: String!
  }

  type Query {
    blogs: [Blog]
  }
`;

const resolvers = {
  Query: {
    blogs: () => blogs,
  },
};

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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
