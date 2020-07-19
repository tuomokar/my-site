import * as React from 'react'
import styled from 'styled-components'

import Square from './square'

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
  <StyledSquare color="blue" onHover={handleSquareHover}>
    <div>Hobbies</div>
    <ExpandedTextContainer id={hobbiesTextExpanded}>
      Coming soon..
    </ExpandedTextContainer>
  </StyledSquare>
)

export default Hobbies
