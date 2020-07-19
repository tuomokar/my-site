import * as React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import SquareWithText from './square-with-text'
import { MAIN_COLOR_1 } from '../colors'

const StyledSquareWithText = styled(SquareWithText)`
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

const SquareRightTop: React.FC = () => {
  return (
    <StyledSquareWithText color={MAIN_COLOR_1} onHover={handleSquareHover}>
      <div>Blog</div>
      <LinkTextContainer id={blogLinkTextId}>
        <StyledLink to="/blog">Click here to move to the blog</StyledLink>
      </LinkTextContainer>
    </StyledSquareWithText>
  )
}

export default SquareRightTop
