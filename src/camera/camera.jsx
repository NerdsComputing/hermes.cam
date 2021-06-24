import React from 'react'
import Webcam from 'react-webcam'

import { useContext } from 'camera/context'

const style = {
  video: {
    height: 384,
    width: 512
  }
}

export const Camera = () => {
  const { camera } = useContext()

  return <Webcam ref={camera} audio={false} videoConstraints={{ facingMode: 'environment', width: 512, height: 384}} />
}
