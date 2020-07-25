import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import { MainColor } from '../../types/colors'

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  font-size: 30px;
  flex-direction: column;
`

interface TileBaseProps {
  color: MainColor
  extraContent: React.ReactNode
  initialContent: React.ReactNode
  className?: string
}

type ContainerProps = Pick<TileBaseProps, 'color'>

const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: ${({ color, theme }) => theme.colors[color]};
`

const TileBase: React.FC<TileBaseProps> = ({
  color,
  className,
  extraContent,
  initialContent,
}) => {
  const [extraContentVisible, setExtraContentVisible] = useState(true)

  return (
    <Container
      className={className}
      color={color}
      onMouseOver={() => setExtraContentVisible(true)}
      onMouseLeave={() => setExtraContentVisible(false)}
    >
      <TextContainer>
        <div>{initialContent}</div>
        {extraContentVisible && extraContent}
      </TextContainer>
    </Container>
  )
}

export default TileBase
