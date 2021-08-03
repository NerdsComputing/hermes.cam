import { useDispatch } from 'react-redux'
import * as fetch from 'camera/slices/fetch'
import * as loading from 'loading/slices/loading'
import { useCallback, useEffect, useMemo } from 'react'
import { useFingerprint } from 'camera/hooks/use-fingerprint'
import { useShouldFetch } from 'camera/hooks/use-should-fetch'

const makePayload = ({ fingerprint }) => ({
  pagination: {
    pageIndex: 0,
    pageSize: 999,
  },
  ids: [fingerprint],
})

const useAction = () => {
  const dispatch = useDispatch()
  const fingerprint = useFingerprint()

  return useCallback(() => {
    dispatch(loading.actions.show(fetch.actions.attempt.type))
    dispatch(fetch.actions.attempt(makePayload({ fingerprint })))
  }, [fingerprint, dispatch])
}

const useParams = () => {
  const dispatch = useDispatch()
  const shouldFetch = useShouldFetch()
  const action = useAction()

  return useMemo(() => ({ dispatch, shouldFetch, action }), [dispatch, shouldFetch, action])
}

export const useCameraFetching = () => {
  const params = useParams()

  useEffect(() => params.shouldFetch && params.action(), [params])
}
