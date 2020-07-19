import * as React from 'react'
import styled from 'styled-components'

import { MAIN_COLOR_2 } from '../colors'

const Square = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: ${MAIN_COLOR_2};
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  font-size: 30px;
`

const SquareRightBottom: React.FC = () => (
  <Square>
    <TextContainer>About</TextContainer>
  </Square>
)

export default SquareRightBottom
