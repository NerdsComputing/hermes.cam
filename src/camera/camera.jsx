import React from 'react'
import Webcam from 'react-webcam'

import { useContext } from './context'

export const Camera = () => {
  const { camera } = useContext()

  return <Webcam ref={camera} videoConstraints={{ facingMode: 'environment' }} />
}
