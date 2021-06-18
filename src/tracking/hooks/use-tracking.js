import { useEffect } from 'react'
import ReactGA from 'react-ga'

import { useSettings } from '../../settings/hooks/use-settings'

export const useTracking = () => {
  const settings = useSettings()

  useEffect(() => {
    ReactGA.initialize(settings.google.trackingId)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [settings])
}
