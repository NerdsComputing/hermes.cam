import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: undefined,
  success: undefined,
  failure: undefined,
}

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

export const fingerprint = createSlice({
  name: 'fingerprint',
  initialState,
  reducers: {
    attempt,
    success,
    failure,
  },
})

export const { actions } = fingerprint
