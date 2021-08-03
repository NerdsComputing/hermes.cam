import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as loading from 'loading/slices/loading'
import * as fingerprint from 'camera/slices/fingerprint'

export const useFingerprintFetching = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loading.actions.show(fingerprint.actions.attempt.type))
    dispatch(fingerprint.actions.attempt({}))
  }, [dispatch])
}
