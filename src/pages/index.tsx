import * as React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SquareTopRight from '../components/square-right-top'
import SquareRightBottom from '../components/square-right-bottom'
import SquareLeftBottom from '../components/square-left-bottom'
import SquareLeftTop from '../components/square-left-top'

interface MainPageProps {
  data: any // TODO improve typing
}

const MainPage: React.FC<MainPageProps> = ({ data }) => {
  return (
    <React.Fragment>
      <SquareLeftTop />
      <SquareTopRight />
      <SquareLeftBottom />
      <SquareRightBottom />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Img
          fixed={data.file.childImageSharp.fixed}
          style={{ borderRadius: '50%' }}
        />
      </div>
    </React.Fragment>
  )
}

export default MainPage

export const query = graphql`
  query {
    file(relativePath: { eq: "tuomo-oila.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
