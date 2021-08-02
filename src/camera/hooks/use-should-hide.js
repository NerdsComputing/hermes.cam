import { useSelector } from 'react-redux'
import { actions } from 'camera/slices/register'

export const useShouldHide = () => useSelector(state => state.loading.includes(actions.attempt.type))
