import { get } from 'lodash'
import { useSelector } from 'react-redux'

export const useCurrentDetections = () => useSelector(state => get(state, 'camera.detections.actual', []))
