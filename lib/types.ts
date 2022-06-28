export type Sprite = {
  back_default: string
  back_female: string
  front_default: string
  front_female: string
}

export interface ApiPokemon {
  id: string
  name: string
  sprites: Sprite
}

export interface ApiPokemonList {
  results: ApiPokemon[]
}
