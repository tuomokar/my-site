import * as React from 'react'
import Container from 'react-bootstrap/Container'
// side effect import
import 'bootstrap/dist/css/bootstrap.min.css'

export const wrapPageElement = ({ element }) => (
  <Container className="p-3">{element}</Container>
)
