import React from 'react'
import Webcam from 'react-webcam'
import { useContext } from 'camera/context'

export const Camera = () => {
  const { setCamera } = useContext()

  return <Webcam ref={setCamera} videoConstraints={{ facingMode: 'environment' }} />
}
