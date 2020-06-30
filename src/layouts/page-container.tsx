import * as React from 'react'
import Container from 'react-bootstrap/Container'
// side effect import
import 'bootstrap/dist/css/bootstrap.min.css'

import NavigationBar from './navigation-bar'

interface ContainerProps {
  children: React.ReactNode
}

const PageContainer: React.FC<ContainerProps> = ({ children }) => (
  <React.Fragment>
    <NavigationBar />
    <Container className="p-3">{children}</Container>
  </React.Fragment>
)

export default PageContainer
