import { combineReducers } from '@reduxjs/toolkit'

import { loading } from 'loading/slices/loading'
import { settings } from 'settings/slices/settings'
import { register } from 'camera/slices/register'

export const reducers = combineReducers({
  settings: settings.reducer,
  loading: loading.reducer,
  register: register.reducer,
})
