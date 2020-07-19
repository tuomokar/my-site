import * as React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const PageContainer: React.FC<ContainerProps> = ({ children }) => (
  <div style={{ height: '100vh' }}>{children}</div>
)

export default PageContainer
