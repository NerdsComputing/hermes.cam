import { setup } from 'network/rest'
import { useEffect, useState } from 'react'

export const useRestSetup = () => {
  const [done, setDone] = useState(false)

  useEffect(() => {
    setup() && setDone(true)
  }, [setDone])

  return done
}
