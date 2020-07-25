import * as React from 'react'
import styled from 'styled-components'

import Square from './square'

const ExpandedTextContainer = styled.div`
  display: none;
`

const StyledSquare = styled(Square)`
  bottom: 0;
`

const Hobbies: React.FC = () => (
  <StyledSquare
    color="blue"
    initialContent="Hobbies"
    extraContent="Coming soon.."
  />
)

export default Hobbies
