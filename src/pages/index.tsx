import * as React from 'react'

import SquareTopRight from '../components/square-right-top'
import SquareRightBottom from '../components/square-right-bottom'
import SquareLeftBottom from '../components/square-left-bottom'
import SquareLeftTop from '../components/square-left-top'
import SelfImage from '../components/self-image'

const MainPage: React.FC = () => (
  <React.Fragment>
    <SquareLeftTop />
    <SquareTopRight />
    <SquareLeftBottom />
    <SquareRightBottom />

    <SelfImage />
  </React.Fragment>
)

export default MainPage
