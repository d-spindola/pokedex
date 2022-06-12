import axios from "axios";
import { PokemonPayload } from "./types";

const instance = axios.create({
  baseURL: " https://pokeapi.co/api/v2/",
});

instance.defaults.timeout = 5000;

/**
 * This function is responsible for get a pokemon by its name or ID.
 * @param nameOrId string name of the pokemon
 * @returns pokemon data
 */
export async function getPokemon(nameOrId: string) {
  return instance
    .get<PokemonPayload>(`/pokemon/${nameOrId}`)
    .then((res) => res.data);
}

/**
 *
 * @returns a list of pokemons (it's a page)
 */
export async function getManyPokemons() {
  return instance.get<any>(`/pokemon?limit=${20}&offset=${0}`);
}
