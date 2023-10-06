import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

import {typeDefs as Aluno} from './schema/alunoSchema.js';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { alunoResolver } from "./resolvers/alunoResolver.js";

const schema = makeExecutableSchema({
    typeDefs: [Aluno],
    resolvers: [alunoResolver]
})

const server = new ApolloServer({
    schema
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`O servidor está rodando em ${url}`);