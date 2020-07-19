import * as React from 'react'
import styled from 'styled-components'

import SquareWithText from './square-with-text'
import { MAIN_COLOR_2 } from '../colors'

const StyledSquareWithText = styled(SquareWithText)`
  bottom: 0;
  right: 0;
`

const SquareRightBottom: React.FC = () => (
  <StyledSquareWithText color={MAIN_COLOR_2}>Contact</StyledSquareWithText>
)

export default SquareRightBottom
