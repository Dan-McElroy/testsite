import { gql } from "apollo-server-express";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { print } from "graphql";

import path from "path";

const typeFilesArray = loadFilesSync(path.join(__dirname, "./types"));

export const typeDefs = mergeTypeDefs(typeFilesArray);
