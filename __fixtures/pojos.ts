import { Pokemon } from '!types/api'

const pokemonBuilder = (name: string): Pokemon => ({
  id: '',
  name: name,
  sprites: {
    front_default: '',
    back_default: '',
    front_female: '',
    back_female: '',
  },
  dominantColor: [0, 0, 0],
})

const names = ['mike', 'bob', 'steve', 'james', 'evelin']

export const pokemonListMock: Pokemon[] = names.map((name: string) =>
  pokemonBuilder(name),
)
