import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { pokemons , types, PokemonData } from "../data";
import Pokemon from "../schemas/Pokemon";

@Resolver(of => Pokemon)
export default class {
    @Query(returns => [Pokemon])
    pokemons(): PokemonData[] {
        return pokemons
    }

    @Query(returns => Pokemon, { nullable: true })
    pokemonByName(@Arg("name") name: string): PokemonData | undefined {
        return pokemons.find(poke => poke.name === name);
    }

    @Query(returns => [Pokemon], { nullable: true })
    pokemonsByType(@Arg("name") name: string): PokemonData[] | undefined {
        return pokemons
        // return pokemons.filter(poke => poke.types.find(type => type === name));
    }
}
