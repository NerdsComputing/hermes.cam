import { tap } from 'rxjs/operators'
import { setup } from 'settings/fetching'
import { useEffect, useState } from 'react'

const setupSettings = onFinish => setup()
  .pipe(tap(settings => onFinish(settings)))
  .subscribe()

export const useFetching = () => {
  const [settings, setSettings] = useState(undefined)

  useEffect(() => {
    const subscription = setupSettings(setSettings)

    return subscription.unsubscribe
  }, [setSettings])

  return settings
}
