import * as React from 'react'
import { navigate } from 'gatsby'

import { TileGroup } from '../components/tile'
import SelfImage from '../components/self-image'

const aboutTile = {
  id: 'about',
  initialContent: 'About',
  onClick: () => navigate('/about'),
}

const blogTile = {
  id: 'blog',
  initialContent: 'Blog',
  onClick: () => navigate('/blog'),
}

const hobbiesTile = {
  id: 'hobbies',
  initialContent: 'Hobbies',
  onClick: () => navigate('/hobbies'),
}

const contactTile = {
  id: 'contact',
  initialContent: 'Contact',
  onClick: () => navigate('/contact'),
}

const tiles = [aboutTile, blogTile, hobbiesTile, contactTile]

const MainPage: React.FC = () => (
  <React.Fragment>
    <TileGroup tiles={tiles} />
    <SelfImage />
  </React.Fragment>
)

export default MainPage
