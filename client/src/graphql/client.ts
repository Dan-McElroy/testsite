import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.SERVER_API_URL);

export const client = new ApolloClient({
  uri: process.env.SERVER_API_URL,
  cache: new InMemoryCache(),
});
