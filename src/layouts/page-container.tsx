import * as React from 'react'
import styled from 'styled-components'

import GlobalStyles from './global-styles'
import Theme from './theme'

interface ContainerProps {
  children: React.ReactNode
}

const PageContentContainer = styled.div`
  height: 100vh;
`

const PageContainer: React.FC<ContainerProps> = ({ children }) => (
  <Theme>
    <GlobalStyles />
    <PageContentContainer>{children}</PageContentContainer>
  </Theme>
)

export default PageContainer
