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
`

interface SquareWithTextProps {
  children: string
  color: string
  className?: string
}

const SquareWithText: React.FC<SquareWithTextProps> = ({
  children,
  className,
  color,
}) => (
  <SquareBase className={className} color={color}>
    <TextContainer>{children}</TextContainer>
  </SquareBase>
)

export default SquareWithText
