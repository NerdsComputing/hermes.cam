import { useContext } from './context'
import { from, of } from 'rxjs'
import { delay, mergeMap, repeat, tap } from 'rxjs/operators'
import { useCallback } from 'react'

export const useCoroutine = () => {
  const { camera, setObjects } = useContext()

  return useCallback(model => of({})
    .pipe(mergeMap(() => from(model.detect(camera.current.video))))
    .pipe(tap(setObjects))
    .pipe(delay(1000))
    .pipe(repeat()), [])
}
