import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as fetch from 'camera/slices/fetch'
import * as loading from 'loading/slices/loading'

export const useCameraFetching = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loading.actions.show(fetch.actions.attempt.type))
    dispatch(fetch.actions.attempt({}))
  }, [dispatch])
}
