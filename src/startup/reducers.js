import { camera } from 'camera/slices'
import { loading } from 'loading/slices/loading'
import { combineReducers } from '@reduxjs/toolkit'

export const reducers = combineReducers({
  loading: loading.reducer,
  camera,
})
