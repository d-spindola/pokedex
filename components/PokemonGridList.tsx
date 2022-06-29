import styled from '@emotion/styled'
import { useDataContext } from 'context/DataContext/useDataContext'
import { FC, ReactNode } from 'react'
import PokemonCardLink from './PokemonCardLink'

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: `1.5rem`,
  height: '50%',
  paddingBottom: '1em',
})

const NotFoundMessageContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',

  '& > *': {
    fontSize: '1.8rem',
    textAlign: 'center',
    color: '#404040',
  },
})

const PokemonGridList: FC = () => {
  const { data } = useDataContext()

  const renderPokemons = (): ReactNode => {
    if (!data.length) {
      return (
        <NotFoundMessageContainer>
          <span>{`Looks like we didn't find any pokemon with this name`}</span>
        </NotFoundMessageContainer>
      )
    }

    return data.map(({ name, dominantColor, sprites }) => (
      <PokemonCardLink
        data-testid="test-card-link"
        key={name}
        pokemonName={name}
        id={name}
        types={[]}
        dominantColor={dominantColor}
        sprites={sprites}
      />
    ))
  }

  return <Grid>{renderPokemons()}</Grid>
}

export default PokemonGridList
