import * as React from 'react'
import styled from 'styled-components'

import SquareWithText from './square-with-text'
import { MAIN_COLOR_2 } from '../colors'

const aboutTextExpandedId = 'tuomokar-about-text-expanded'

const handleSquareHover = `
  #${aboutTextExpandedId} {
    display: block;
  }
`

const AboutTextExpandedContainer = styled.div`
  display: none;
`

const SquareRightBottom: React.FC = () => (
  <SquareWithText color={MAIN_COLOR_2} onHover={handleSquareHover}>
    <div>About</div>
    <AboutTextExpandedContainer id={aboutTextExpandedId}>
      <div>
        Full stack software developer, team leader and tech lead regarding front
        end. Currently working at a small company named Haahtela HR, creating
        next generation software regarding staffing, payroll management and
        workforce scheduling.
      </div>
      <div>Please note that this site is still heavily under construction!</div>
    </AboutTextExpandedContainer>
  </SquareWithText>
)

export default SquareRightBottom
