import * as React from 'react'
import styled from 'styled-components'

import Square from './square'

const About: React.FC = () => (
  <Square
    color="green"
    initialContent="About"
    extraContent={
      <React.Fragment>
        Full stack software developer, team leader and tech lead regarding front
        end. Currently working at a small company named Haahtela HR, creating
        next generation software regarding staffing, payroll management and
        workforce scheduling.
      </React.Fragment>
    }
  />
)

export default About
