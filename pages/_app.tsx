import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Global } from '@emotion/react'
import globalStyles from '../styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Component {...pageProps} />;
    </Fragment>
  )
}

export default MyApp
