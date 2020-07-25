import * as React from 'react'
import styled from 'styled-components'

import Tile from './tile'

type TileProps = React.ComponentProps<typeof Tile>

interface StyledTileProps {
  horizontalPosition: 'left' | 'right'
  verticalIndex: number
}

interface horizontalPosition extends TileProps, StyledTileProps {}

const StyledTile = styled<React.FC<horizontalPosition>>(
  ({ verticalIndex, horizontalPosition, ...tileProps }) => (
    <Tile {...tileProps} />
  )
)`
  left: ${({ horizontalPosition }) =>
    horizontalPosition === 'left' ? 0 : 50}%;
  top: ${({ verticalIndex }) => verticalIndex * 50}%;
`

const PositionedTile: React.FC<horizontalPosition> = ({
  horizontalPosition,
  verticalIndex,
  ...tileProps
}) => (
  <StyledTile
    horizontalPosition={horizontalPosition}
    verticalIndex={verticalIndex}
    {...tileProps}
  />
)

export default PositionedTile
