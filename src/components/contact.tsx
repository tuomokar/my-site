import * as React from 'react'
import styled from 'styled-components'

import Tile from './tile'

const ExpandedTextContainer = styled.div`
  display: none;
`

const StyledTile = styled(Tile)`
  bottom: 0;
  right: 0;
`

const Contact: React.FC = () => (
  <StyledTile
    color="green"
    initialContent="Contact"
    extraContent="Coming soon.."
  />
)

export default Contact
