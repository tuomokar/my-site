import * as React from 'react'
import styled from 'styled-components'

import Square from './square'

const ExpandedTextContainer = styled.div`
  display: none;
`

const StyledSquare = styled(Square)`
  bottom: 0;
  right: 0;
`

const Contact: React.FC = () => (
  <StyledSquare
    color="green"
    initialContent="Contact"
    extraContent="Coming soon.."
  />
)

export default Contact
