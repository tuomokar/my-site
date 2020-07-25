import * as React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FixedObject } from 'gatsby-image'

interface SelfImageQueryProps {
  file: { childImageSharp: { fixed: FixedObject } }
}

const SelfImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledImage = styled(Img)`
  border-radius: 50%;
`

const SelfImage: React.FC = () => {
  const data = useStaticQuery<SelfImageQueryProps>(graphql`
    query {
      file(relativePath: { eq: "tuomo-oila.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <SelfImageContainer>
      <StyledImage fixed={data.file.childImageSharp.fixed} />
    </SelfImageContainer>
  )
}

export default SelfImage
