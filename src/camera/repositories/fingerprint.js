import { from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
import fingerprint from '@fingerprintjs/fingerprintjs'

export const get = () => from(fingerprint.load())
  .pipe(mergeMap(result => from(result.get())))
  .pipe(map(result => result))
