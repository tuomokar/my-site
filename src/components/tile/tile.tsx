import * as React from 'react'
import styled from 'styled-components'

import TileBase from './tile-base'

interface TileProps {
  extraContent: React.ReactNode
  initialContent: React.ReactNode
  color: 'blue' | 'green'
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
