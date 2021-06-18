import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'

import React from 'react'

import { Behaviour } from 'camera/behaviour'
import { Detections } from 'camera/detections'
import { useValue, Context } from 'camera/context'
import { Camera as CameraComponent } from 'camera/camera'

export const Camera = () => <Context.Provider value={useValue()}>
  <Behaviour />
  <CameraComponent />
  <Detections />
</Context.Provider>
