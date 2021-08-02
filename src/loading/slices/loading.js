import { createSlice } from '@reduxjs/toolkit'

const state = () => []

const show = (state, action) => [...state, action.payload]

const hide = (state, action) => state.filter(item => item !== action.payload)

export const loading = createSlice({
  name: 'loading',
  initialState: state(),
  reducers: {
    show,
    hide,
  },
})

export const { actions } = loading
