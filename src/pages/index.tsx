import * as React from 'react'

import SelfImage from '../components/self-image'
import PagesTileGroup from '../components/tile/pages-tile-group'

const MainPage: React.FC = () => (
  <React.Fragment>
    <PagesTileGroup />
    <SelfImage />
  </React.Fragment>
)

export default MainPage
