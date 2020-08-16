import * as React from 'react'
import styled from 'styled-components'

import GlobalStyles from './global-styles'
import Theme from './theme'

interface ContainerProps {
  children: React.ReactNode
}

const stripesDirectionFromLeft = '45deg'
const stripesDirectionFromRight = '135deg'

let i = 0
// In the pages we render stripes. Alternate their direction between renders
// (i.e. in practice when switching pages).
const determineStripeDirection = () => {
  const stripeDirection =
    i % 3 === 0 ? stripesDirectionFromLeft : stripesDirectionFromRight
  i++

  return stripeDirection
}

const ContentContainer = styled.div`
  min-height: 100vh;
  ${({ theme: { colors } }) => `
    background: repeating-linear-gradient(${determineStripeDirection()}, ${
    colors.primaryGreen
  }, ${colors.primaryGreen} 50px, ${colors.primaryBlue} 50px, ${
    colors.primaryBlue
  } 30%);

  `}
`

const PageContainer: React.FC<ContainerProps> = ({ children }) => (
  <Theme>
    <GlobalStyles />
    <ContentContainer>{children}</ContentContainer>
  </Theme>
)

export default PageContainer
