import { from, of } from 'rxjs'
import { useDispatch } from 'react-redux'
import { useContext } from 'camera/context'
import { useCallback, useMemo } from 'react'
import { actions } from 'camera/slices/detections'
import { delay, mergeMap, repeat, tap } from 'rxjs/operators'

const useParams = () => {
  const { camera } = useContext()
  const dispatch = useDispatch()

  return useMemo(() => ({ camera, dispatch }), [camera, dispatch])
}

export const useCoroutine = () => {
  const params = useParams()

  return useCallback(model => of([])
    .pipe(mergeMap(() => from(model.detect(params.camera.video))))
    .pipe(tap(detection => params.dispatch(actions.buffer(detection))))
    .pipe(delay(1000))
    .pipe(repeat()), [params])
}
