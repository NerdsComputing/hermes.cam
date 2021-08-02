import { fetch } from 'camera/slices/fetch'
import { register } from 'camera/slices/register'
import { combineReducers } from '@reduxjs/toolkit'

export const camera = combineReducers({
  fetch: fetch.reducer,
  register: register.reducer,

})
