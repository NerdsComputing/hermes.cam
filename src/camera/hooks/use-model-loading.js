import { tap } from 'rxjs/operators'
import { useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { useContext } from 'camera/context'
import { repository } from 'camera/repository'
import { actions } from 'loading/slices/loading'

const makeSubscription = ({ setModel, dispatch }) => repository.model()
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
