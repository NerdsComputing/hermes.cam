import { from, of } from 'rxjs'
import { useCallback } from 'react'
import { useContext } from 'camera/context'
import { delay, mergeMap, repeat, tap } from 'rxjs/operators'

export const useCoroutine = () => {
  const { camera, setObjects } = useContext()

  return useCallback(model => of([])
    .pipe(mergeMap(() => from(model.detect(camera.video))))
    .pipe(tap(setObjects))
    .pipe(delay(1000))
    .pipe(repeat()), [camera, setObjects])
}
