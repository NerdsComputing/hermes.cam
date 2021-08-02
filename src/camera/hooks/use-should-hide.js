import { useSelector } from 'react-redux'

export const useShouldHide = () => useSelector(state => state.loading.includes('registering-camera'))
