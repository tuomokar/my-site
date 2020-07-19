import * as React from 'react'
import styled from 'styled-components'

import GlobalStyles from './global-styles'

interface ContainerProps {
  children: React.ReactNode
}

const PageContentContainer = styled.div`
  height: 100vh;
`

const PageContainer: React.FC<ContainerProps> = ({ children }) => (
  <React.Fragment>
    <GlobalStyles />
    <PageContentContainer>{children}</PageContentContainer>
  </React.Fragment>
)

export default PageContainer
