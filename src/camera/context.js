import React, { useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => React.useContext(Context)

export const useValue = () => {
  const [camera, setCamera] = useState(undefined)
  const [cameraReady, setCameraReady] = useState(false)
  const [objects, setObjects] = useState([])
  const [model, setModel] = useState(undefined)

  return { camera, setCamera, objects, setObjects, model, setModel, cameraReady, setCameraReady }
}
