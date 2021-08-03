import { fetch } from 'camera/slices/fetch'
import { register } from 'camera/slices/register'
import { combineReducers } from '@reduxjs/toolkit'
import { detections } from 'camera/slices/detections'
import { fingerprint } from 'camera/slices/fingerprint'

export const camera = combineReducers({
  fetch: fetch.reducer,
  register: register.reducer,
  fingerprint: fingerprint.reducer,
  detections: detections.reducer,
})
