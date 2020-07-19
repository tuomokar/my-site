import * as React from 'react'
import { MAIN_COLOR_2 } from '../colors'

const SquareRightBottom: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      width: '50%',
      height: '50%',
      backgroundColor: MAIN_COLOR_2,
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        height: '100%',
        fontSize: '30px',
      }}
    >
      About
    </div>
  </div>
)

export default SquareRightBottom
