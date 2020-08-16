import * as React from 'react'

import PositionedTile from './positioned-tile'
import {
  getColorForTilePosition,
  getHorizontalPosition,
  getVerticalIndex,
} from './helper-functions'

type TileProps = React.ComponentProps<typeof PositionedTile>

interface TileRenderData
  extends Pick<TileProps, 'initialContent' | 'extraContent' | 'onClick'> {
  id: string
}

interface TileGroupProps {
  tiles: TileRenderData[]
}

const TileGroup: React.FC<TileGroupProps> = ({ tiles }) => (
  <React.Fragment>
    {tiles.map(({ initialContent, extraContent, id, onClick }, index) => (
      <PositionedTile
        horizontalPosition={getHorizontalPosition(index)}
        verticalIndex={getVerticalIndex(index)}
        key={id}
        color={getColorForTilePosition(index)}
        onClick={onClick}
        initialContent={initialContent}
        extraContent={extraContent}
      />
    ))}
  </React.Fragment>
)

export default TileGroup
