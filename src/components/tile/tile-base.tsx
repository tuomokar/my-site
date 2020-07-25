import * as React from 'react'
import styled from 'styled-components'

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
  color: 'blue' | 'green'
  extraContent: React.ReactNode
  initialContent: React.ReactNode
  className?: string
}

type ContainerProps = Pick<TileBaseProps, 'color'>

const MainContainer = styled.div<ContainerProps>`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: ${({ color, theme }) =>
    color === 'blue' ? theme.colors.primaryBlue : theme.colors.primaryGreen};
`

const TileBase: React.FC<TileBaseProps> = ({
  color,
  className,
  extraContent,
  initialContent,
}) => {
  const [extraContentVisible, setExtraContentVisible] = React.useState(false)

  return (
    <React.Fragment>
      <MainContainer
        className={className}
        color={color}
        onMouseOver={() => setExtraContentVisible(true)}
        onMouseLeave={() => setExtraContentVisible(false)}
      >
        <TextContainer>
          <div>{initialContent}</div>
          {extraContentVisible && extraContent}
        </TextContainer>
      </MainContainer>
    </React.Fragment>
  )
}

export default TileBase
