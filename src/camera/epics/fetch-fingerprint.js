import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { catchError, mergeMap } from 'rxjs/operators'
import * as loadingSlice from 'loading/slices/loading'
import * as fingerprintSlice from 'camera/slices/fingerprint'
import * as repository from 'camera/repositories/fingerprint'

export const fetchFingerprint = action$ => action$
  .pipe(ofType(fingerprintSlice.actions.attempt.type))
  .pipe(mergeMap(perform))

const perform = () => repository.get()
  .pipe(mergeMap(successActions))
  .pipe(catchError(failureActions))

const successActions = result => from([
  fingerprintSlice.actions.success(result),
  loadingSlice.actions.hide(fingerprintSlice.actions.attempt.type),
])

const failureActions = error => from([
  fingerprintSlice.actions.failure(error),
  loadingSlice.actions.hide(fingerprintSlice.actions.attempt.type),
])
