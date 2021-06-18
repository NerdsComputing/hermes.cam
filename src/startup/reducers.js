import { combineReducers } from '@reduxjs/toolkit'

import { loading } from 'loading/slices/loading'
import { settings } from 'settings/slices/settings'

export const reducers = combineReducers({
  settings: settings.reducer,
  loading: loading.reducer,
})
