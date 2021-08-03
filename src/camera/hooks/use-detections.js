import { get } from 'lodash'
import { useSelector } from 'react-redux'

export const useDetections = () => useSelector(state => get(state, 'camera.detections.actual', []))
