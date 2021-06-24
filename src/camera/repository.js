import { from, fromEvent } from 'rxjs'
import {loadLayersModel} from '@tensorflow/tfjs'

const camera = ref => fromEvent(ref.current.video, 'play')

const model = () => from(loadLayersModel(`${process.env.PUBLIC_URL}/model/model.json`))

export const repository = {
  camera,
  model,
}
