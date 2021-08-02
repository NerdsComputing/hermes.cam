import { loading } from 'loading/slices/loading'
import { register } from 'camera/slices/register'
import { combineReducers } from '@reduxjs/toolkit'

export const reducers = combineReducers({
  loading: loading.reducer,
  register: register.reducer,
})
