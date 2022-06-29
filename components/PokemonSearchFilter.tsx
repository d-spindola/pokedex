import styled from '@emotion/styled'
import { useDataContext } from 'context/DataContext/useDataContext'
import { FC } from 'react'
import { FaSearch } from 'react-icons/fa'

const InputSpacementController = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
})

const InputContainer = styled.div({
  display: 'flex',
  border: '2px solid black',
  width: 'min(300px, 90%)',
  height: '40px',
})

const CustomInput = styled.input({
  border: 'none',
  height: '100%',
  width: '100%',
  background: 'none',
  fontSize: '1.4em',
  padding: '0 10px',
})

const CustomButton = styled.button({
  background: 'transparent',
  border: 'none',
  width: '40px',
  borderLeft: '2px solid black',
  '&:hover': {
    cursor: 'pointer',
    background: 'black',
    color: 'white',
    transition: 'all .2s ease-in-out',
  },
})

const PokemonSearchFilter: FC = () => {
  const { onQueryChange } = useDataContext()

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(target.value)
  }

  return (
    <InputSpacementController>
      <InputContainer>
        <CustomInput
          placeholder="pokemon name..."
          onChange={handleChange}
          type="text"
        />
        <CustomButton>
          <FaSearch size="80%" />
        </CustomButton>
      </InputContainer>
    </InputSpacementController>
  )
}

export default PokemonSearchFilter
