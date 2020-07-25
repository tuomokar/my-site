import * as React from 'react'
import styled from 'styled-components'

import Tile from './tile'

const ExpandedTextContainer = styled.div`
  display: none;
`

const StyledTile = styled(Tile)`
  bottom: 0;
`

const Hobbies: React.FC = () => (
  <StyledTile
    color="blue"
    initialContent="Hobbies"
    extraContent="Coming soon.."
  />
)

export default Hobbies
