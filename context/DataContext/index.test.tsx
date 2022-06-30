import '@testing-library/jest-dom'
import Home from 'pages'
import { fireEvent, render, screen } from 'test-utils'
import { pokemonListMock } from '__fixtures/pojos'

describe('PokemonSearchFilter', () => {
  it('should render the filter component', async () => {
    render(<Home pokemons={pokemonListMock} />)

    const mike = screen.getByText(`mike`)
    const bob = screen.getByText(`bob`)
    const steve = screen.getByText(`steve`)
    const james = screen.getByText(`james`)
    const evelyn = screen.getByText(`evelin`)

    expect(mike).toBeInTheDocument()
    expect(bob).toBeInTheDocument()
    expect(steve).toBeInTheDocument()
    expect(james).toBeInTheDocument()
    expect(evelyn).toBeInTheDocument()
  })

  it('should render the filter component with an invalid filter query param.', async () => {
    render(<Home pokemons={pokemonListMock} />)

    const input = screen.getByTestId('test-search-input-filter')

    fireEvent.change(input, {
      target: {
        value: 'elliot',
      },
    })

    const emptyText = screen.getByText(
      "Looks like we didn't find any pokemon with this name",
    )

    expect(emptyText).toBeInTheDocument()
  })
})
