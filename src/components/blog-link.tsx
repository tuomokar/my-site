import * as React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import Tile from './tile'

const StyledTile = styled(Tile)`
  right: 0;
`

const StyledLink = styled(Link)`
  color: white;
`

const BlogLink: React.FC = () => (
  <StyledTile
    color="blue"
    initialContent="Blog"
    extraContent={
      <StyledLink to="/blog">Click here to move to the blog</StyledLink>
    }
  />
)

export default BlogLink
