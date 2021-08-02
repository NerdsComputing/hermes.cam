import { usePrediction } from 'camera/hooks/use-prediction'
import { useModelLoading } from 'camera/hooks/use-model-loading'
import { useCameraLoading } from 'camera/hooks/use-camera-loading'
import { useCameraFetching } from 'camera/hooks/use-camera-fetching'
import { useCameraRegistering } from 'camera/hooks/use-camera-registering'

export const Behaviour = () => {
  useCameraFetching()
  useCameraRegistering()
  useCameraLoading()
  useModelLoading()
  usePrediction()

  return ''
}
