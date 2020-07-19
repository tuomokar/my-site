import * as React from 'react'
import styled from 'styled-components'

import SquareWithText from './square-with-text'
import { MAIN_COLOR_1 } from '../colors'

const hobbiesTextExpanded = 'tuomokar-hobbies-text-expanded'

const handleSquareHover = `
  #${hobbiesTextExpanded} {
    display: block;
  }
`

const ExpandedTextContainer = styled.div`
  display: none;
`

const StyledSquareWithText = styled(SquareWithText)`
  bottom: 0;
`

const SquareRightBottom: React.FC = () => (
  <StyledSquareWithText color={MAIN_COLOR_1} onHover={handleSquareHover}>
    <div>Hobbies</div>
    <ExpandedTextContainer id={hobbiesTextExpanded}>
      Coming soon..
    </ExpandedTextContainer>
  </StyledSquareWithText>
)

export default SquareRightBottom
