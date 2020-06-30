import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Link from 'gatsby-link'

const NavigationBar: React.FC = () => (
  <Navbar bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>Tuomo Oila</Navbar.Brand>
    </Link>
    <Nav>
      <Link to="/biography">
        <Nav.Link as="span">Bio</Nav.Link>
      </Link>
      <Link to="/work">
        <Nav.Link as="span">Work</Nav.Link>
      </Link>
      <Link to="/contact">
        <Nav.Link as="span">Contact</Nav.Link>
      </Link>
    </Nav>
  </Navbar>
)

export default NavigationBar
