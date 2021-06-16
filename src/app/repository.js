import {from, fromEvent} from "rxjs";
import {load} from "@tensorflow-models/coco-ssd";

const camera = ref => fromEvent(ref.current.video, 'play')

const model = () => from(load({base: "mobilenet_v2"}))

export const repository = {
  camera,
  model
}
