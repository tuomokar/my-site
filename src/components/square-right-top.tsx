import * as React from 'react'
import styled from 'styled-components'

import SquareWithText from './square-with-text'
import { MAIN_COLOR_1 } from '../colors'

const StyledSquareWithText = styled(SquareWithText)`
  right: 0;
`

const SquareRightTop: React.FC = () => (
  <StyledSquareWithText color={MAIN_COLOR_1}>Blog</StyledSquareWithText>
)

export default SquareRightTop
