import { useEffect, useMemo } from 'react'
import { useContext } from 'camera/context'
import { useCoroutine } from 'camera/hooks/use-coroutine'

const useParams = () => {
  const { camera, model, cameraReady } = useContext()
  const startPrediction = useCoroutine()
  const shouldSkip = useShouldSkip()
  const factory = () => ({ camera, startPrediction, model, cameraReady, shouldSkip })

  return useMemo(factory, [camera, startPrediction, model, cameraReady, shouldSkip])
}

const useShouldSkip = () => {
  const { camera, model, cameraReady } = useContext()

  return !camera || !model || !cameraReady
}

export const usePrediction = () => {
  const params = useParams()

  useEffect(() => {
    if (params.shouldSkip) return

    const subscription = params.startPrediction(params.model).subscribe()

    return () => subscription.unsubscribe()
  }, [params])
}
