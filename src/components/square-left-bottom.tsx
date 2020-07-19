import * as React from 'react'
import styled from 'styled-components'

import { MAIN_COLOR_1 } from '../colors'

const Square = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: ${MAIN_COLOR_1};
  bottom: 0px;
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
    <TextContainer>Hobbies</TextContainer>
  </Square>
)

export default SquareRightBottom
