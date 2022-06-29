import styled from '@emotion/styled'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

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
})

interface Props {
  appName: string
}

const Header: FC<PropsWithChildren<Props>> = ({ appName, children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src="/pokeball.png"
          alt="Pokeball representing the app logo"
          width={32}
          height={32}
        />
        <p>{appName}</p>
      </LogoContainer>
      {children}
    </HeaderContainer>
  )
}

export default Header
