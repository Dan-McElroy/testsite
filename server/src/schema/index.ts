import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import resolvers from "./resolvers";

const typeFilesArray = loadFilesSync(path.join(__dirname, "./types"));

export const typeDefs = mergeTypeDefs(typeFilesArray);
export default { resolvers };
