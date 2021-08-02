import { usePrediction } from 'camera/hooks/use-prediction'
import { useRegistering } from 'camera/hooks/use-registering'
import { useModelLoading } from 'camera/hooks/use-model-loading'
import { useCameraLoading } from 'camera/hooks/use-camera-loading'

export const Behaviour = () => {
  useRegistering()
  useCameraLoading()
  useModelLoading()
  usePrediction()

  return ''
}
