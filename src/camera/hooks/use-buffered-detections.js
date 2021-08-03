import { get } from 'lodash'
import { useSelector } from 'react-redux'
import { useFingerprint } from 'camera/hooks/use-fingerprint'

const makeDetection = ({ item, fingerprint }) => ({
  class: item.class,
  score: item.score,
  cameraId: fingerprint,
  timestamp: new Date().toISOString(),
})

export const useBufferedDetections = () => {
  const fingerprint = useFingerprint()
  const buffer = useSelector(state => get(state, 'camera.detections.buffer', []))

  return buffer.map(item => makeDetection({ fingerprint, item }))
}
