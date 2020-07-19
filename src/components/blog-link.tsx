import * as React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import Square from './square'

const StyledSquare = styled(Square)`
  right: 0;
`

const blogLinkTextId = 'tuomokar-blog-link-text'

const handleSquareHover = `
  #${blogLinkTextId} {
    display: block;
  }
`

const LinkTextContainer = styled.div`
  display: none;
`

const StyledLink = styled(Link)`
  color: white;
`

// TODO: need to change how this reacts in smaller windows
// (such as on mobile - not really good looking there right now)
const BlogLink: React.FC = () => (
  <StyledSquare color="blue" onHover={handleSquareHover}>
    <div>Blog</div>
    <LinkTextContainer id={blogLinkTextId}>
      <StyledLink to="/blog">Click here to move to the blog</StyledLink>
    </LinkTextContainer>
  </StyledSquare>
)

export default BlogLink
