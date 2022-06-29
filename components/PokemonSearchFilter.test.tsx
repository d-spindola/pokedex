import '@testing-library/jest-dom'
import { render } from 'test-utils'
import PokemonSearchFilter from './PokemonSearchFilter'

describe('PokemonSearchFilter', () => {
  it('should render the filter component', () => {
    render(<PokemonSearchFilter />)
  })
})
