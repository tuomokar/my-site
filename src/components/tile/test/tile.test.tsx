import * as React from 'react'

import Tile from '../tile'
import { renderWithTheme } from '../../../test-util/render-utils'
import { theme } from '../../../layouts/theme'
// Side effect import
// TODO: not having the import here (and only in jest.setup.js) breaks typescript (the matchers aren't added to jest)
import 'jest-styled-components'

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

  it('renders with the given color as the background color', () => {
    const { container } = renderTile()

    expect(container.firstChild).toHaveStyleRule(
      `background-color`,
      theme.colors[mockProps.color]
    )
  })
})
