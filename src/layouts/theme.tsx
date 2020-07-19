import * as React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primaryBlue: '#1A4782',
    primaryGreen: '#68BA6E',
  },
}

interface ThemeProps {
  children: React.ReactNode
}

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
