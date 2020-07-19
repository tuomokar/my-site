import * as React from 'react'
import styled from 'styled-components'

import Square from './square'
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

const StyledSquare = styled(Square)`
  bottom: 0;
`

const Hobbies: React.FC = () => (
  <StyledSquare color={MAIN_COLOR_1} onHover={handleSquareHover}>
    <div>Hobbies</div>
    <ExpandedTextContainer id={hobbiesTextExpanded}>
      Coming soon..
    </ExpandedTextContainer>
  </StyledSquare>
)

export default Hobbies
