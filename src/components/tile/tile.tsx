import * as React from 'react'

import TileBase from './tile-base'
import { MainColor } from '../../types/colors'

interface TileProps {
  extraContent?: React.ReactNode
  initialContent: React.ReactNode
  color: MainColor
  className?: string
  onClick?: () => void
}

const Tile: React.FC<TileProps> = ({
  extraContent,
  initialContent,
  className,
  color,
  onClick = null,
}) => (
  <TileBase
    className={className}
    color={color}
    initialContent={initialContent}
    extraContent={extraContent}
    onClick={onClick}
  ></TileBase>
)

export default Tile
