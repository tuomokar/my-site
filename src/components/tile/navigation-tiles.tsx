import * as React from 'react'
import styled from 'styled-components'

import PagesTileGroup from './pages-tile-group'

const PositionedContainer = styled.div`
  position: absolute;
  height: 250px;
  width: 250px;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid white;
`

const NavigationTiles: React.FC = () => {
  return (
    <PositionedContainer>
      <Container>
        <PagesTileGroup />
      </Container>
    </PositionedContainer>
  )
}

export default NavigationTiles
