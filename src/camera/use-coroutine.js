import {of, from} from 'rxjs'
import {useCallback} from 'react'
import {delay, mergeMap, repeat, tap, map} from 'rxjs/operators'
import {fromPixels} from '@tensorflow/tfjs-core/dist/ops/browser'

import {useContext} from 'camera/context'
import {classes} from '../classes'

export const useCoroutine = () => {
    const {camera, setObjects} = useContext()

    return useCallback(model => of({})
        .pipe(mergeMap(() => {
            const tensor = fromPixels(camera.current.video)

            return of(model.predict(tensor.slice([0, 0, 0], [384, 512, 3]).reshape([-1, 512, 384, 3]), {verbose: true}))
        }))
        .pipe(mergeMap(result => from(result.array())))
        .pipe(map(([scores]) => scores.map((score, index) => ({score, class: classes[index]}))))
        .pipe(tap(result => setObjects(result)))
        .pipe(delay(1000))
        .pipe(repeat()), [camera, setObjects])
}
