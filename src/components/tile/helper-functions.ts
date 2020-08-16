import { MainColor } from '../../types/colors'
import PositionedTile from './positioned-tile'

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

export const getColorForTilePosition = (tileNumber: number): MainColor => {
  return tileColorsByTileNumber[tileNumber % maxNumberOfTilesInViewPort]
}

const isEvenNumber = (evenOrOddNumber: number) => evenOrOddNumber % 2 === 0

export const getHorizontalPosition = (index: number) =>
  isEvenNumber(index) ? 'left' : 'right'

export const getVerticalIndex = (index: number) => Math.floor(index / 2)
