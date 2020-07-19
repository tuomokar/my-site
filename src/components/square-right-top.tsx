import * as React from 'react'
import styled from 'styled-components'

import { MAIN_COLOR_1 } from '../colors'

const Square = styled.div`
  position: absolute;
  right: 0px;
  width: 50%;
  height: 50%;
  background-color: ${MAIN_COLOR_1};
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  font-size: 30px;
`

const SquareRightTop: React.FC = () => (
  <Square>
    <TextContainer>Blog</TextContainer>
  </Square>
)

export default SquareRightTop
