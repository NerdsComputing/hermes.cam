import { graph } from 'network'
import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'
import * as queries from 'camera/repositories/queries/camera'

export const readiness = instance => fromEvent(instance.video, 'play')

export const register = input => graph()
  .mutate({ mutation: queries.register, variables: { input } })
  .pipe(map(result => result.data.registerCamera))

export const byParameter = parameter => graph()
  .query({ query: queries.byParameter, variables: { parameter } })
  .pipe(map(result => result.data.cameras))

