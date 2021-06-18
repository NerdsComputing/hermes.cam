import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { catchError, mergeMap } from 'rxjs/operators'

import { actions } from '../slices/settings'
import * as repository from '../repositories/fetch'
import * as loading from '../../loading/slices/loading'

const successActions = settings => from([
  actions.success(settings),
  loading.actions.hide(actions.attempt.type),
])

const perform = () => repository.fetch()
  .pipe(mergeMap(successActions))
  .pipe(catchError(error => actions.failure(error)))

export const fetch = action$ => action$
  .pipe(ofType(actions.attempt.type))
  .pipe(mergeMap(perform))
