import React, { useRef, useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => React.useContext(Context)

export const useValue = () => {
  const camera = useRef()
  const [objects, setObjects] = useState([])

  return { camera, objects, setObjects }
}
