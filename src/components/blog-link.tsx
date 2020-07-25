import * as React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import Square from './square'

const StyledSquare = styled(Square)`
  right: 0;
`

const StyledLink = styled(Link)`
  color: white;
`

const BlogLink: React.FC = () => (
  <StyledSquare
    color="blue"
    initialContent="Blog"
    extraContent={
      <StyledLink to="/blog">Click here to move to the blog</StyledLink>
    }
  />
)

export default BlogLink
