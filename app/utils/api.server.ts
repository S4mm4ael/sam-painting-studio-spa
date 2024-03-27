import {GraphQLClient} from "graphql-request";

export const api = new GraphQLClient(process.env.API_KEY as string);
