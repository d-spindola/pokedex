import axios, { AxiosResponse } from 'axios'
import { ApiPokemon, ApiPokemonList } from './types'

const pokeApi = axios.create({
  baseURL: ' https://pokeapi.co/api/v2/',
})

pokeApi.defaults.timeout = 5000

type Res<T> = AxiosResponse<T>

export async function getPokemon(nameOrId: string): Promise<ApiPokemon> {
  return pokeApi.get<ApiPokemon>(`/pokemon/${nameOrId}`).then((res) => res.data)
}

export async function getManyPokemons(): Promise<Res<ApiPokemonList>> {
  return pokeApi.get<ApiPokemonList>(`/pokemon?limit=${10}&offset=${0}`)
}

export default pokeApi
