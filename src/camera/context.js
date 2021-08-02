import React, { useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => React.useContext(Context)

export const useValue = () => {
  const [camera, setCamera] = useState(undefined)
  const [objects, setObjects] = useState([])

  return { camera, setCamera, objects, setObjects }
}
