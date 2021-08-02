import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as loading from 'loading/slices/loading'
import * as register from 'camera/slices/register'

export const useRegistering = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loading.actions.show(register.actions.attempt.type))
    dispatch(register.actions.attempt({}))
  }, [dispatch])
}
