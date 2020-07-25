import * as React from 'react'

import { MainColor } from '../../types/colors'
import PositionedTile from './positioned-tile'

interface TileRenderData {
  id: string
  initialContent: React.ReactNode
  extraContent: React.ReactNode
}

interface TileGroupProps {
  tiles: TileRenderData[]
}

type TileColorsByTileNumber = {
  [key: number]: MainColor
}
const tileColorsByTileNumber: TileColorsByTileNumber = {
  0: 'primaryBlue',
  1: 'primaryGreen',
  2: 'primaryGreen',
  3: 'primaryBlue',
}

const maxNumberOfTilesInViewPort = 4

const getColorForTilePosition = (tileNumber: number): MainColor => {
  return tileColorsByTileNumber[tileNumber % maxNumberOfTilesInViewPort]
}

const isEvenNumber = (evenOrOddNumber: number) => evenOrOddNumber % 2 === 0

const getHorizontalPosition = (index: number) =>
  isEvenNumber(index) ? 'left' : 'right'

const getVerticalIndex = (index: number) => Math.floor(index / 2)

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
