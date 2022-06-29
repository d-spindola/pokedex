import styled from '@emotion/styled'
import { FC, PropsWithChildren } from 'react'
import { MdOutlineCatchingPokemon } from 'react-icons/md'

const HeaderContainer = styled.header({
  display: 'flex',
  alignItems: 'center',
  padding: '1em 0 0',
})

const LogoContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2em',
  fontWeight: 'bold',
  '& > p': {
    color: '#576eff',
  },
})

interface Props {
  appName: string
}

const Header: FC<PropsWithChildren<Props>> = ({ appName, children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <MdOutlineCatchingPokemon fill="#ff5773" size={40} />
        <p style={{ textTransform: 'capitalize', fontSize: '2em' }}>
          {appName}
        </p>
      </LogoContainer>
      {children}
    </HeaderContainer>
  )
}

export default Header
