import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  buffer: [],
  attempt: undefined,
  success: undefined,
  failure: undefined,
}

const buffer = (state, action) => ({
  ...state,
  buffer: [...buffer, action.payload],
})

const attempt = (state, action) => ({
  ...state,
  attempt: action.payload,
})

const success = (state, action) => ({
  ...state,
  success: action.payload,
})

const failure = (state, action) => ({
  ...state,
  failure: action.payload,
})

const reset = () => initialState

export const detections = createSlice({
  name: 'detections',
  initialState,
  reducers: {
    buffer,
    attempt,
    success,
    failure,
    reset,
  },
})

export const { actions } = detections
