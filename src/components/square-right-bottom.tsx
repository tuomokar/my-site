import * as React from 'react'
import { MAIN_COLOR_2 } from '../colors'

const SquareRightBottom: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      right: 0,
      width: '50%',
      height: '50%',
      backgroundColor: MAIN_COLOR_2,
      bottom: 0,
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
      Contact
    </div>
  </div>
)

export default SquareRightBottom
