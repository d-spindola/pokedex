import styled from '@emotion/styled'

const HomePageMainLayout = styled('main')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '10vh 15vh auto',
  gap: '1em',
  background: '#ffb58c38',
  padding: '0 1em',
  height: 'min(100vh)',
})

export default HomePageMainLayout
