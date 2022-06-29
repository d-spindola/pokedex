import styled from '@emotion/styled'

const HomePageMainLayout = styled('main')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '10vh 15vh auto',
  gap: '1.0em',
  padding: '0 1em',
  height: 'min(100vh)',
})

export default HomePageMainLayout
