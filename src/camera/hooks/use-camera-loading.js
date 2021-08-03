import { useEffect } from 'react'
import { tap } from 'rxjs/operators'
import { useContext } from 'camera/context'
import * as repository from 'camera/repositories/camera'

const makeSubscription = ({ camera, setCameraReady }) => repository.readiness(camera)
  .pipe(tap(() => setCameraReady(true)))
  .subscribe()

export const useCameraLoading = () => {
  const { camera, model, setCameraReady } = useContext()

  useEffect(() => {
    if (!camera) return

    const subscription = makeSubscription({ camera, setCameraReady })

    return () => subscription.unsubscribe()
  }, [camera, model, setCameraReady])
}
