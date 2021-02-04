
export interface PokemonData {
    id: number;
    name: string;
    types: string[]
}

export interface TypeData {
    id: number;
    name: string
}

export const pokemons: PokemonData[] = [
    { id: 1, name: "Bulbizarre", types: ["Grass"] },
    { id: 2, name: "Herbizarre", types: ["Grass"] },
    { id: 4, name: "Carapuce", types: ["Water"]  },
];

export const types: TypeData[] = [
    { id: 1, name: "Grass"},
    { id: 2, name: "Water" }
];
