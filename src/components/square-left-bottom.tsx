import * as React from 'react'
import { MAIN_COLOR_1 } from '../colors'

const SquareRightBottom: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      width: '50%',
      height: '50%',
      backgroundColor: MAIN_COLOR_1,
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
      Hobbies
    </div>
  </div>
)

export default SquareRightBottom
