import { usePrediction } from 'camera/hooks/use-prediction'
import { useRegistering } from 'camera/hooks/use-registering'
import { useModelLoading } from 'camera/hooks/use-model-loading'
import { useCameraLoading } from 'camera/hooks/use-camera-loading'
import { useCameraFetching } from 'camera/hooks/use-camera-fetching'

export const Behaviour = () => {
  useCameraFetching()
  useRegistering()
  useCameraLoading()
  useModelLoading()
  usePrediction()

  return ''
}
