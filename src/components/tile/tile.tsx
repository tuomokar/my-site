import * as React from 'react'

import TileBase from './tile-base'
import { MainColor } from '../../types/colors'

interface TileProps {
  extraContent: React.ReactNode
  initialContent: React.ReactNode
  color: MainColor
  className?: string
}

const Tile: React.FC<TileProps> = ({
  extraContent,
  initialContent,
  className,
  color,
}) => (
  <TileBase
    className={className}
    color={color}
    initialContent={initialContent}
    extraContent={extraContent}
  ></TileBase>
)

export default Tile
