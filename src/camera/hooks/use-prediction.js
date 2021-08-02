import { useEffect, useMemo } from 'react'
import { combineLatest } from 'rxjs'
import { useContext } from 'camera/context'
import { repository } from 'camera/repository'
import { mergeMap, map } from 'rxjs/operators'
import { useCoroutine } from 'camera/hooks/use-coroutine'

const makeSubscription = params => combineLatest([repository.camera(params.camera), repository.model()])
  .pipe(map(([_, model]) => model))
  .pipe(mergeMap(params.startPrediction))
  .subscribe()

const useParams = () => {
  const { camera } = useContext()
  const startPrediction = useCoroutine()

  return useMemo(() => ({ camera, startPrediction }), [camera, startPrediction])
}

export const usePrediction = () => {
  const params = useParams()

  useEffect(() => {
    if (!params.camera) return

    const subscription = makeSubscription(params)

    return () => subscription.unsubscribe()
  }, [params])
}
