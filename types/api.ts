import { Color } from 'colorthief'
import { ApiPokemon } from '../lib/types'

export type Pokemon = ApiPokemon & {
  dominantColor: Color
}
