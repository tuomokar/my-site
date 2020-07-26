import * as React from 'react'
import styled from 'styled-components'

import GlobalStyles from './global-styles'
import Theme from './theme'

interface ContainerProps {
  children: React.ReactNode
}

const ContentContainer = styled.div`
  min-height: 100vh;
  ${({ theme: { colors } }) => `
    background-image: linear-gradient(to right, ${colors.primaryGreen} 50%, ${colors.primaryBlue} 50%);
  `}
`

const PageContainer: React.FC<ContainerProps> = ({ children }) => (
  <Theme>
    <GlobalStyles />
    <ContentContainer>{children}</ContentContainer>
  </Theme>
)

export default PageContainer
