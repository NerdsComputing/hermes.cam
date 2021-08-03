import { usePrediction } from 'camera/hooks/use-prediction'
import { useModelLoading } from 'camera/hooks/use-model-loading'
import { useCameraLoading } from 'camera/hooks/use-camera-loading'
import { useCameraFetching } from 'camera/hooks/use-camera-fetching'
import { useCameraRegistering } from 'camera/hooks/use-camera-registering'
import { useDetectionsCreating } from 'camera/hooks/use-detections-creating'
import { useFingerprintFetching } from 'camera/hooks/use-fingerprint-fetching'

const useCameraBehaviour = () => {
  useCameraFetching()
  useCameraRegistering()
  useCameraLoading()
}

export const Behaviour = () => {
  useFingerprintFetching()
  useCameraBehaviour()
  useModelLoading()
  usePrediction()
  useDetectionsCreating()

  return ''
}
