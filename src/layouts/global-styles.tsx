import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const GlobalStyles: React.FC = () => <GlobalStyle />

export default GlobalStyles
