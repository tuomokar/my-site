import * as React from 'react'
import styled from 'styled-components'

interface TextPageContainerProps {
  children: React.ReactNode
}

const Container = styled.div`
  padding-top: 50px;
`

const PageTextContainer: React.FC<TextPageContainerProps> = ({ children }) => (
  <Container>{children}</Container>
)

export default PageTextContainer
