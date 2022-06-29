import styled from '@emotion/styled'
import { Color } from 'colorthief'
import { FC } from 'react'
import { Sprite } from '@lib/poke-api/types'
import { arrayRgbToHsl, arrayToRgb } from 'utils/colors'

interface Props {
  pokemonName: string
  types: string[]
  id: unknown
  dominantColor: Color
  sprites: Sprite
}

const Container = styled.div<{ background: Color }>(({ background }) => ({
  backgroundColor: arrayToRgb(background),
  display: 'flex',
  flexDirection: 'column',
  height: '10em',
  borderRadius: '8px',
  padding: '0 15px',
  position: 'relative',
  border: `4px solid transparent`,
  '&:hover': {
    backgroundColor: arrayRgbToHsl(background, 30),
    cursor: 'pointer',
    border: `4px solid ${arrayRgbToHsl(background, 40)}`,
    animation: 'all .2s ease-in-out',
  },
  '&::before': {
    content: "''",
    backgroundImage: "url('/pokeball.png')",
    backgroundBlendMode: 'soft-light',
    backgroundPosition: 'top',
    backgroundPositionX: '0px',
  },
}))

const PokemonNameContainer = styled.div({
  padding: '0 5px',
})

const PokemonNameText = styled.p({
  fontSize: '1.5em',
  color: 'white',
  fontWeight: 'bold',
})

const ImageContainer = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'end',
  alignItems: 'center',
})

const PokemonCardLink: FC<Props> = ({
  pokemonName,
  types,
  dominantColor,
  sprites,
}) => {
  return (
    <Container background={dominantColor}>
      <PokemonNameContainer>
        <PokemonNameText>{pokemonName}</PokemonNameText>
      </PokemonNameContainer>
      <div>
        <ul>
          {types.map((type, index) => {
            return <li key={`n-${index}-${type}`}>{type}</li>
          })}
        </ul>
      </div>
      <ImageContainer>
        {sprites.front_default && (
          <img
            src={sprites.front_default}
            width={100}
            height={100}
            crossOrigin="anonymous"
          />
        )}
      </ImageContainer>
    </Container>
  )
}

export default PokemonCardLink
