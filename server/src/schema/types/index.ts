import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeFilesArray = loadFilesSync(path.join(__dirname, "./*.graphql"));

const typeDefs = mergeTypeDefs(typeFilesArray);
export default typeDefs;
