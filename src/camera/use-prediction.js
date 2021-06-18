import { useEffect } from 'react'
import { combineLatest } from 'rxjs'
import { mergeMap, map, tap } from 'rxjs/operators'

import { useContext } from './context'
import { repository } from './repository'
import { useCoroutine } from './use-coroutine'

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
  }, [])
}
