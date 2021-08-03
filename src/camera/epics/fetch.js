import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import * as fetchSlice from 'camera/slices/fetch'
import { catchError, mergeMap } from 'rxjs/operators'
import * as loadingSlice from 'loading/slices/loading'
import * as repository from 'camera/repositories/camera'

export const fetch = action$ => action$
  .pipe(ofType(fetchSlice.actions.attempt.type))
  .pipe(mergeMap(perform))

const perform = action => repository.byParameter(action.payload)
  .pipe(mergeMap(successActions))
  .pipe(catchError(failureActions))

const successActions = result => from([
  fetchSlice.actions.success(result),
  loadingSlice.actions.hide(fetchSlice.actions.attempt.type),
])

const failureActions = error => from([
  fetchSlice.actions.failure(error),
  loadingSlice.actions.hide(fetchSlice.actions.attempt.type),
])
