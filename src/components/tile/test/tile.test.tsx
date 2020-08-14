import * as React from 'react'
import Tile from '../tile'
import { renderWithTheme } from '../../../test-util/render-utils'

const initialContentText = 'initialContentTestText'
const extraContentText = 'extraContentTestText'

const mockProps: React.ComponentProps<typeof Tile> = {
  initialContent: initialContentText,
  extraContent: extraContentText,
  color: 'primaryBlue',
}

const renderTile = (props = mockProps) => renderWithTheme(<Tile {...props} />)

describe('tile', () => {
  it('renders the initial content given', () => {
    const { getByText } = renderTile()
    expect(getByText(initialContentText)).toBeInTheDocument()
  })
})
