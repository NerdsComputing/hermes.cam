import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { catchError, mergeMap } from 'rxjs/operators'
import * as loadingSlice from 'loading/slices/loading'
import * as registerSlice from 'camera/slices/register'
import * as repository from 'camera/repositories/camera'

export const register = action$ => action$
  .pipe(ofType(registerSlice.actions.attempt.type))
  .pipe(mergeMap(perform))

const perform = action => repository.register(action.payload)
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
