import { getAllBlogs } from "./blogs/queries";

const resolvers = {
  Query: {
    ...getAllBlogs,
  },
};

export default resolvers;
