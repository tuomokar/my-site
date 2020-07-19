import * as React from 'react'
import styled from 'styled-components'

interface SquareBaseProps {
  color: string
  children: React.ReactNode
  className?: string
}

const Container = styled.div<SquareBaseProps>`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: ${({ color }) => color};
`

const SquareBase: React.FC<SquareBaseProps> = ({
  color,
  className,
  children,
}) => (
  <Container className={className} color={color}>
    {children}
  </Container>
)

export default SquareBase
