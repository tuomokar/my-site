import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

// TODO: replace text styles (such as color: white on body and margin: 0 on h1)
// by other means (such as using a typography component)
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: white;
  }

  h1 {
    margin: 0;
  }
`

const GlobalStyles: React.FC = () => <GlobalStyle />

export default GlobalStyles
