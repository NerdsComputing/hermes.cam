import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as loading from 'loading/slices/loading'
import * as register from 'camera/slices/register'
import { useFingerprint } from 'camera/hooks/use-fingerprint'
import { useShouldRegister } from 'camera/hooks/use-should-register'
import { usePosition } from 'camera/hooks/use-position'

const useParams = () => {
  const dispatch = useDispatch()
  const shouldRegister = useShouldRegister()
  const fingerprint = useFingerprint()

  return useMemo(() => ({ dispatch, shouldRegister, fingerprint }), [dispatch, shouldRegister, fingerprint])
}

const useCalculatePosition = () => {
  const [position, setPosition] = useState(undefined)
  usePosition(setPosition)

  return position
}

const registerCamera = (params, position) => {
  params.dispatch(loading.actions.show(register.actions.attempt.type))
  params.dispatch(register.actions.attempt([{ id: params.fingerprint, ...position }]))
}

export const useCameraRegistering = () => {
  const position = useCalculatePosition()
  const params = useParams()

  useEffect(() => {
    if (!params.shouldRegister || !position) return

    registerCamera(params, position)
  }, [params, position])
}
