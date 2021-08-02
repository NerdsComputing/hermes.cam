import React from 'react'
import Webcam from 'react-webcam'

import { useContext } from 'camera/context'
import { useShouldHide } from 'camera/hooks/use-should-hide'

export const Camera = () => {
  const { camera } = useContext()

  if (useShouldHide()) {
    return <div />
  }

  return <Webcam ref={camera} videoConstraints={{ facingMode: 'environment' }} />
}
