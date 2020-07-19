import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBlue: string
      primaryGreen: string
    }
  }
}
