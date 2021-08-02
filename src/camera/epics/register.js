import { from, of } from 'rxjs'
import { ofType } from 'redux-observable'
import * as loadingSlice from 'loading/slices/loading'
import * as registerSlice from 'camera/slices/register'
import { catchError, delay, mergeMap } from 'rxjs/operators'

export const register = action$ => action$
  .pipe(ofType(registerSlice.actions.attempt.type))
  .pipe(mergeMap(perform))

const perform = () => of({})
  .pipe(delay(3000))
  .pipe(mergeMap(successActions))
  .pipe(catchError(failureActions))

const successActions = visitorId => from([
  registerSlice.actions.success(visitorId),
  loadingSlice.actions.hide(registerSlice.actions.attempt.type),
])

const failureActions = error => from([
  registerSlice.actions.failure(error),
  loadingSlice.actions.hide(registerSlice.actions.attempt.type),
])
