import { css } from '@emotion/react'

export default css`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #ffb58c38;
  }

  p {
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: #fff;
  }

  ::-webkit-scrollbar-track {
    background: #3e3e3e;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    width: 5px;
    background: #576eff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #272727;
  }
`
