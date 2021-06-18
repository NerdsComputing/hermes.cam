import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { catchError, mergeMap } from 'rxjs/operators'

import * as loading from 'loading/slices/loading'
import { actions } from 'settings/slices/settings'
import * as repository from 'settings/repositories/fetch'

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
