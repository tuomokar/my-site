import * as React from 'react'
import styled from 'styled-components'

interface TextPageContainerProps {
  children: React.ReactNode
}

const Container = styled.div`
  padding: 50px 10px 10px;
  max-width: 900px;
  margin: 0 auto;
`

const PageTextContainer: React.FC<TextPageContainerProps> = ({ children }) => (
  <Container>{children}</Container>
)

export default PageTextContainer
