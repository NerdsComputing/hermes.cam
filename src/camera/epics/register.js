import { of } from 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { actions } from 'camera/slices/register'

export const register = action$ => action$
  .pipe(ofType(actions.attempt.type))
  .pipe(mergeMap(perform))

const perform = action => of(actions.success({}))
