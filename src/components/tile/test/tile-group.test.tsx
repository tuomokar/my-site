import * as React from 'react'

import TileGroup from '../tile-group'
import { renderWithTheme } from '../../../test-util/render-utils'
import { theme } from '../../../layouts/theme'
// Side effect import
// TODO: not having the import here (and only in jest-setup.js) breaks typescript (the matchers aren't added to jest)
import 'jest-styled-components'

const tilesData: React.ComponentProps<typeof TileGroup>['tiles'] = [
  {
    id: '1',
    initialContent: 'initialContentText1',
    extraContent: 'extraContentText1',
  },
  {
    id: '2',
    initialContent: 'initialContentText2',
    extraContent: 'extraContentText2',
  },
  {
    id: '3',
    initialContent: 'initialContentText3',
    extraContent: 'extraContentText3',
  },
]

const mockProps: React.ComponentProps<typeof TileGroup> = {
  tiles: tilesData,
}

const renderTileGroup = (props = mockProps) =>
  renderWithTheme(<TileGroup {...props} />)

describe('TileGroup', () => {
  it('renders correctly', () => {
    const { container } = renderTileGroup()

    expect(container).toMatchSnapshot()
  })
})
