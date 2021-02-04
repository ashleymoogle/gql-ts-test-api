import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from 'type-graphql'
import PokemonsResolver from './resolvers/PokemonsResolver'
import TypesResolver from './resolvers/TypesResolver'

async function main() {
    const schema = await buildSchema({
        resolvers: [PokemonsResolver, TypesResolver] // add this
    })
    const server = new ApolloServer({ schema })
    await server.listen(4000)
    console.log("Server has started!")
}

main()
