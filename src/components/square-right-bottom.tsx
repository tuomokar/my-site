import * as React from 'react'
import styled from 'styled-components'

import SquareWithText from './square-with-text'
import { MAIN_COLOR_2 } from '../colors'

const contactTextExpanded = 'tuomokar-contact-text-expanded'

const handleSquareHover = `
  #${contactTextExpanded} {
    display: block;
  }
`

const ExpandedTextContainer = styled.div`
  display: none;
`

const StyledSquareWithText = styled(SquareWithText)`
  bottom: 0;
  right: 0;
`

const SquareRightBottom: React.FC = () => (
  <StyledSquareWithText color={MAIN_COLOR_2} onHover={handleSquareHover}>
    <div>Contact</div>
    <ExpandedTextContainer id={contactTextExpanded}>
      Coming soon..
    </ExpandedTextContainer>
  </StyledSquareWithText>
)

export default SquareRightBottom
