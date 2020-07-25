import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { TileGroup } from '../components/tile'
import SelfImage from '../components/self-image'

// TODO: move the content definitions elsewhere
const aboutTile = {
  id: 'about',
  initialContent: 'About',
  extraContent: (
    <React.Fragment>
      Full stack software developer, team leader and tech lead regarding front
      end. Currently working at a small company named Haahtela HR, creating next
      generation software regarding staffing, payroll management and workforce
      scheduling. Please note that this site is still under construction.
    </React.Fragment>
  ),
}

const StyledLink = styled(Link)`
  color: white;
`

const blogTile = {
  id: 'blog',
  initialContent: 'Blog',
  extraContent: (
    <StyledLink to="/blog">Click here to move to the blog</StyledLink>
  ),
}

const hobbiesTile = {
  id: 'hobbies',
  initialContent: 'Hobbies',
  extraContent: 'Coming soon..',
}

const contactTile = {
  id: 'contact',
  initialContent: 'Contact',
  extraContent: 'Coming soon..',
}

const tiles = [aboutTile, blogTile, hobbiesTile, contactTile]

const MainPage: React.FC = () => (
  <React.Fragment>
    <TileGroup tiles={tiles} />
    <SelfImage />
  </React.Fragment>
)

export default MainPage
