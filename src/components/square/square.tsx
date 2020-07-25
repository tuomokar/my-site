import * as React from 'react'
import styled from 'styled-components'

import SquareBase from './square-base'

interface SquareProps {
  extraContent: React.ReactNode
  initialContent: React.ReactNode
  color: 'blue' | 'green'
  className?: string
}

const Square: React.FC<SquareProps> = ({
  extraContent,
  initialContent,
  className,
  color,
}) => (
  <SquareBase
    className={className}
    color={color}
    initialContent={initialContent}
    extraContent={extraContent}
  ></SquareBase>
)

export default Square
