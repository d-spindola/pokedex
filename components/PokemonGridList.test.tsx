import '@testing-library/jest-dom'
import { fireEvent, render, screen } from 'test-utils'
import PokemonGridList from './PokemonGridList'
import PokemonSearchFilter from './PokemonSearchFilter'

describe('PokemonSearchFilter', () => {
  it('should render the PokemonGridList with 5 elements.', () => {
    render(<PokemonGridList />)

    const names = screen.getAllByTestId('test-card-link')

    expect(names.length).toEqual(5)
  })

  it('should render the PokemonGridList with 1 element.', () => {
    render(
      <>
        <PokemonSearchFilter />
        <PokemonGridList />
      </>,
    )

    const input = screen.getByTestId('test-search-input-filter')

    fireEvent.change(input, {
      target: {
        value: 'mike',
      },
    })

    const names = screen.getAllByTestId('test-card-link')

    expect(names.length).toEqual(1)
  })

  it('should render the PokemonGridList with 2 element.', () => {
    render(
      <>
        <PokemonSearchFilter />
        <PokemonGridList />
      </>,
    )

    const input = screen.getByTestId('test-search-input-filter')

    fireEvent.change(input, {
      target: {
        value: 'i',
      },
    })

    const names = screen.getAllByTestId('test-card-link')

    expect(names.length).toEqual(2)
  })

  it('should render the PokemonGridList with empty message.', () => {
    render(
      <>
        <PokemonSearchFilter />
        <PokemonGridList />
      </>,
    )

    const input = screen.getByTestId('test-search-input-filter')

    fireEvent.change(input, {
      target: {
        value: '404',
      },
    })

    const emptyText = screen.getByText(
      `Looks like we didn't find any pokemon with this name`,
    )

    expect(emptyText).toBeInTheDocument()
  })
})
