import { tap } from 'rxjs/operators'
import { useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { useContext } from 'camera/context'
import { actions } from 'loading/slices/loading'
import * as repository from 'camera/repositories/model'

const makeSubscription = ({ setModel, dispatch }) => repository.load()
  .pipe(tap(setModel))
  .pipe(tap(() => dispatch(actions.hide('@prediction/model/loading'))))
  .subscribe()

const useParams = () => {
  const dispatch = useDispatch()
  const { setModel } = useContext()

  return useMemo(() => ({ dispatch, setModel }), [dispatch, setModel])
}

export const useModelLoading = () => {
  const params = useParams()

  useEffect(() => {
    params.dispatch(actions.show('@prediction/model/loading'))

    const subscription = makeSubscription(params)

    return () => subscription.unsubscribe()
  }, [params])
}
