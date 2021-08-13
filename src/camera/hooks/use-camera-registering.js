import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as loading from 'loading/slices/loading'
import * as register from 'camera/slices/register'
import { useFingerprint } from 'camera/hooks/use-fingerprint'
import { useShouldRegister } from 'camera/hooks/use-should-register'

const useParams = () => {
  const dispatch = useDispatch()
  const shouldRegister = useShouldRegister()
  const fingerprint = useFingerprint()

  return useMemo(() => ({ dispatch, shouldRegister, fingerprint }), [dispatch, shouldRegister, fingerprint])
}

const makePosition = () => ({
  longitude: Math.random(),
  latitude: Math.random(),
})

export const useCameraRegistering = () => {
  const params = useParams()

  useEffect(() => {
    if (!params.shouldRegister) return

    params.dispatch(loading.actions.show(register.actions.attempt.type))
    params.dispatch(register.actions.attempt([{ id: params.fingerprint, ...makePosition() }]))
  }, [params])
}
