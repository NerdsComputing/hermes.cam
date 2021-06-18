import { useEffect } from 'react'
import { combineLatest } from 'rxjs'
import { mergeMap, map } from 'rxjs/operators'

import { useContext } from 'camera/context'
import { repository } from 'camera/repository'
import { useCoroutine } from 'camera/use-coroutine'

const makeSubscription = params => combineLatest([repository.camera(params.camera), repository.model()])
  .pipe(map(([_, model]) => model))
  .pipe(mergeMap(params.startPrediction))
  .subscribe()

export const usePrediction = () => {
  const { camera } = useContext()
  const startPrediction = useCoroutine()

  useEffect(() => {
    const subscription = makeSubscription({ camera, startPrediction })

    return () => subscription.unsubscribe()
  }, [camera, startPrediction])
}
