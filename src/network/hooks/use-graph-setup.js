import { setup } from 'network/graph'
import { useEffect, useState } from 'react'

export const useGraphSetup = () => {
  const [done, setDone] = useState(false)

  useEffect(() => {
    setup() && setDone(true)
  }, [setDone])

  return done
}
