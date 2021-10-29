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
  const chunks = []

  return useCallback(model => of([])
    .pipe(tap(detection => {
      const mediaRecorder = new MediaRecorder(params.camera.stream)

      mediaRecorder.ondataavailable = event => {
        debugger
        chunks.push(event.data)
      }

      mediaRecorder.start()
    }))
    .pipe(delay(1000)) , [params])
}
