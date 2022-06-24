import axios from "axios";
import { PokemonPayload } from "./types";

const pokeApi = axios.create({
  baseURL: " https://pokeapi.co/api/v2/",
});

pokeApi.defaults.timeout = 5000;

/**
 * This function is responsible for get a pokemon by its name or ID.
 * @param nameOrId string name of the pokemon
 * @returns pokemon data
 */
export async function getPokemon(nameOrId: string) {
  return pokeApi
    .get<PokemonPayload>(`/pokemon/${nameOrId}`)
    .then((res) => res.data);
}

/**
 *
 * @returns a list of pokemons (it's a page)
 */
export async function getManyPokemons() {
  return pokeApi.get<any>(`/pokemon?limit=${50}&offset=${0}`);
}

export default pokeApi;
