import { useSelector } from 'react-redux'

export const useShouldShow = () => useSelector(state => !!state.loading.length)
