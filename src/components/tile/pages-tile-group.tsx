import * as React from 'react'
import { navigate } from 'gatsby'

import TileGroup from './tile-group'

/*
TODO: The page data shouldn't really be defined here.
And actually, it could probably be got through the site's metadata via graphql.
*/

const mainPath = '/'
const aboutPath = '/about'
const blogPath = '/blog'
const hobbiesPath = '/hobbies'
const contactPath = '/contact'

interface TileObjectBase {
  id: string
  initialContent: string
}

interface TileObjectWithPath extends TileObjectBase {
  path: string
}

interface TileObjectWithOnClick extends TileObjectBase {
  onClick: () => void
}

const pathsById = new Map([
  ['main', mainPath],
  ['about', aboutPath],
  ['blog', blogPath],
  ['hobbies', hobbiesPath],
  ['contact', contactPath],
])

const getPathById = (id: string): string => {
  const path = pathsById.get(id)

  if (!path) {
    throw new Error('No path defined for the given id')
  }

  return path
}

const mainPageTile: TileObjectWithPath = {
  id: 'main',
  initialContent: 'Main page',
  path: mainPath,
}

const aboutTile: TileObjectWithPath = {
  id: 'about',
  initialContent: 'About',
  path: aboutPath,
}

const blogTile: TileObjectWithPath = {
  id: 'blog',
  initialContent: 'Blog',
  path: blogPath,
}

const hobbiesTile: TileObjectWithPath = {
  id: 'hobbies',
  initialContent: 'Hobbies',
  path: hobbiesPath,
}

const contactTile: TileObjectWithPath = {
  id: 'contact',
  initialContent: 'Contact',
  path: contactPath,
}

const allTilesWithPath = [
  mainPageTile,
  aboutTile,
  blogTile,
  hobbiesTile,
  contactTile,
]

const allTilesClickHandler: TileObjectWithOnClick[] = allTilesWithPath.map(
  ({ path, ...tile }) => ({ ...tile, onClick: () => navigate(path) })
)

/**
 * Renders tiles for all pages except the current page.
 */
const PagesTileGroup: React.FC = () => {
  const currentPath = window?.location.pathname ?? mainPath

  const tilesWithoutCurrentPage = allTilesClickHandler.filter(
    ({ id }) => getPathById(id) !== currentPath
  )

  return <TileGroup tiles={tilesWithoutCurrentPage} />
}

export default PagesTileGroup
