import { get } from 'lodash'
import { useSelector } from 'react-redux'

export const useFingerprint = () => useSelector(state => get(state, 'camera.fingerprint.success.visitorId', undefined))
