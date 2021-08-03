import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as detectionsSlice from 'camera/slices/detections'
import { useBufferedDetections } from 'camera/hooks/use-buffered-detections'

const useParams = () => {
  const buffer = useBufferedDetections()
  const dispatch = useDispatch()

  return useMemo(() => ({ buffer, dispatch }), [buffer, dispatch])
}

export const useDetectionsCreating = () => {
  const params = useParams()

  useEffect(() => {
    if (params.buffer.length < 5) return

    params.dispatch(detectionsSlice.actions.attempt(params.buffer))
    params.dispatch(detectionsSlice.actions.reset({}))
  }, [params])
}
