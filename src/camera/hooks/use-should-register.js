import { get } from 'lodash'
import { useSelector } from 'react-redux'

export const useShouldRegister = () => {
  const existing = useSelector(state => get(state, 'camera.fetch.success.items', undefined))

  return !!existing && existing.length === 0
}
