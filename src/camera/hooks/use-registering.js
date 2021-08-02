import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from 'loading/slices/loading'

export const useRegistering = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.show('registering-camera'))
    dispatch(actions.verify({}))
  }, [dispatch])
}
