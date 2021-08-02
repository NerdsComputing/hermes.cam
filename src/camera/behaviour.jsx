import { usePrediction } from 'camera/hooks/use-prediction'
import { useRegistering } from 'camera/hooks/use-registering'

export const Behaviour = () => {
  useRegistering()
  usePrediction()

  return ''
}
