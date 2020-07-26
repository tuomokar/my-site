import * as React from 'react'

import PositionedTile from './positioned-tile'
import {
  getColorForTilePosition,
  getHorizontalPosition,
  getVerticalIndex,
} from './helper-functions'

interface TileRenderData {
  id: string
  initialContent: React.ReactNode
  extraContent: React.ReactNode
}

interface TileGroupProps {
  tiles: TileRenderData[]
}

const TileGroup: React.FC<TileGroupProps> = ({ tiles }) => (
  <React.Fragment>
    {tiles.map(({ initialContent, extraContent, id }, index) => (
      <PositionedTile
        horizontalPosition={getHorizontalPosition(index)}
        verticalIndex={getVerticalIndex(index)}
        key={id}
        color={getColorForTilePosition(index)}
        initialContent={initialContent}
        extraContent={extraContent}
      />
    ))}
  </React.Fragment>
)

export default TileGroup
