import { graph } from 'network'
import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'
import * as queries from 'camera/repositories/queries/camera'

export const readiness = instance => fromEvent(instance.video, 'play')

export const register = () => { }

export const byParameter = () => graph()
  .query({ query: queries.byParameter })
  .pipe(map(result => result.data.cameras))

