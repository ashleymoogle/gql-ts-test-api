import fetch from 'node-fetch'
import { Arg, Query, Resolver, Root } from "type-graphql";
import { pokemons, types, TypeData, PokemonData } from "../data";
import Type from "../schemas/Type";


@Resolver(of => Type)
export default class {
    @Query(returns => [Type])
    getTypes(): TypeData[] {
        return types;
    }

    @Query(returns => Type, { nullable: true })
    async getTypeById(@Arg("id") id: number): Promise<any> {
        const type = await fetch(`https://pokeapi.co/api/v2/type/${id}`).then(d => d.json())

        return {
            id: type.id,
            name: type.name,
            pokemon: type.pokemon.reduce((acc: any, item: any) => {
                acc.push({
                    id: parseInt(item.pokemon.url.split('/')[item.pokemon.url.split('/').length - 2]),
                    ...item.pokemon
                })
                return acc
            }, [])
        }
    }

    @Query(returns => Type, { nullable: true })
    getTypeByName(@Arg("name") name: string): TypeData | undefined {
        return types.find(type => type.name === name);
    }
}
