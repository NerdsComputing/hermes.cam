import { graph } from 'network'
import { map } from 'rxjs/operators'
import * as queries from 'camera/repositories/queries/detection'

export const create = input => graph()
  .mutate({ mutation: queries.detection, variables: { input } })
  .pipe(map(result => result.data.createDetection))
