import { from, fromEvent } from 'rxjs'
import { load } from '@tensorflow-models/coco-ssd'

const camera = instance => fromEvent(instance.video, 'play')

const model = () => from(load({ base: 'mobilenet_v2' }))

export const repository = {
  camera,
  model,
}
