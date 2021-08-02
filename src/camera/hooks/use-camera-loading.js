import { useEffect } from 'react'
import { tap } from 'rxjs/operators'
import { useContext } from 'camera/context'
import { repository } from 'camera/repository'

const makeSubscription = ({ camera, setCameraReady }) => repository.camera(camera)
  .pipe(tap(() => setCameraReady(true)))
  .subscribe()

export const useCameraLoading = () => {
  const { camera, model, setCameraReady } = useContext()

  useEffect(() => {
    if (!camera || !model) return

    const subscription = makeSubscription({ camera, setCameraReady })

    return () => subscription.unsubscribe()
  }, [camera, model, setCameraReady])
}
