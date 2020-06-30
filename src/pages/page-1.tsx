import * as React from 'react'
import Link from 'gatsby-link'

const DefaultPage: React.FC = () => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default DefaultPage
