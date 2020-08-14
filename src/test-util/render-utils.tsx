import * as React from 'react'
import { render } from '@testing-library/react'

import Theme from '../layouts/theme'

export const renderWithTheme = (children: React.ReactNode) =>
  render(<Theme>{children}</Theme>)
