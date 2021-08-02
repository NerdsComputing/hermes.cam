import { from } from 'rxjs'
import * as tensorflow from '@tensorflow-models/coco-ssd'

export const load = () => from(tensorflow.load({ base: 'mobilenet_v2' }))
