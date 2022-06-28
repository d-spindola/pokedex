import styled from '@emotion/styled'
import { FC } from 'react'

const mediaQuery = (query: 'min' | 'max', value: string) => {
  return `@media (${query}-width: ${value})`
}

const Grid = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: `1.5rem`,
}))

interface GridProps {
  children: JSX.Element
}

const PokemonGridList: FC<GridProps> = ({ children }) => {
  return <Grid>{children}</Grid>
}

export default PokemonGridList
