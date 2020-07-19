import * as React from 'react'
import { MAIN_COLOR_1 } from '../colors'

const Cone: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      right: 0,
      width: '50%',
      height: '50%',
      backgroundColor: MAIN_COLOR_1,
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
      Blog
    </div>
  </div>
)

export default Cone
