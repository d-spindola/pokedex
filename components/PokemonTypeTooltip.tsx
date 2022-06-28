import styled from '@emotion/styled'
import { ReactNode } from 'react'

const mapTooltipColor = (type: string | ReactNode) => {
  switch (type) {
    case 'grass':
      return 'green'
    case 'fire':
      return 'red'
    case 'thunder':
      return 'yellow'
  }
}

const PokemonTypeTooltip = styled('div')(({ children }) => ({
  height: '2em',
  minWidth: '4em',
  fontSize: '1.5em',
  color: 'black',
  borderRadius: '1.2em',
  backgroundColor: mapTooltipColor(children),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    cursor: 'pointer',
  },
}))

export default PokemonTypeTooltip
