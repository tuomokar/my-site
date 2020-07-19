import * as React from 'react'
import styled from 'styled-components'

import SquareBase from './square-base'

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  font-size: 30px;
  flex-direction: column;
`

interface SquareWithTextProps {
  children: React.ReactNode
  color: string
  className?: string
  onHover?: string
}

const SquareWithText: React.FC<SquareWithTextProps> = ({
  children,
  className,
  color,
  onHover,
}) => (
  <SquareBase className={className} color={color} onHover={onHover}>
    <TextContainer>{children}</TextContainer>
  </SquareBase>
)

export default SquareWithText
