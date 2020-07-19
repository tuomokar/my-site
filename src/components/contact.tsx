import * as React from 'react'
import styled from 'styled-components'

import Square from './square'

const contactTextExpanded = 'tuomokar-contact-text-expanded'

const handleSquareHover = `
  #${contactTextExpanded} {
    display: block;
  }
`

const ExpandedTextContainer = styled.div`
  display: none;
`

const StyledSquare = styled(Square)`
  bottom: 0;
  right: 0;
`

const Contact: React.FC = () => (
  <StyledSquare color="green" onHover={handleSquareHover}>
    <div>Contact</div>
    <ExpandedTextContainer id={contactTextExpanded}>
      Coming soon..
    </ExpandedTextContainer>
  </StyledSquare>
)

export default Contact
