import * as React from 'react'
import styled from 'styled-components'

interface SquareBaseProps {
  color: string
  children: React.ReactNode
  className?: string
  onHover?: string
}

type ContainerProps = Pick<SquareBaseProps, 'color' | 'onHover'>

// TODO: extract `onHover` so that it's not passed to the DOM element
const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: ${({ color }) => color};

  ${({ onHover }) =>
    onHover &&
    `
    :hover {
       ${onHover}
    }
  `}
`

const SquareBase: React.FC<SquareBaseProps> = ({
  color,
  className,
  children,
  onHover,
}) => (
  <Container onHover={onHover} className={className} color={color}>
    {children}
  </Container>
)

export default SquareBase
