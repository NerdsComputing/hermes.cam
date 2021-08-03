import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap, catchError } from 'rxjs/operators'
import * as loadingSlice from 'loading/slices/loading'
import * as detectionsSlice from 'camera/slices/detections'
import * as detectionRepository from 'camera/repositories/detection'

export const sendDetections = action$ => action$
  .pipe(ofType(detectionsSlice.actions.attempt.type))
  .pipe(mergeMap(perform))

const perform = action => detectionRepository.create(action.payload)
  .pipe(mergeMap(successActions))
  .pipe(catchError(failureActions))

const successActions = result => from([
  detectionsSlice.actions.success(result),
  loadingSlice.actions.hide(detectionsSlice.actions.attempt.type),
])

const failureActions = error => from([
  detectionsSlice.actions.failure(error),
  loadingSlice.actions.hide(detectionsSlice.actions.attempt.type),
])
