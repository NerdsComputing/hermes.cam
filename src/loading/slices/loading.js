import {createSlice} from "@reduxjs/toolkit";

import * as settings from '../../settings/slices/settings'

const state = () => [settings.actions.attempt.type]

const show = (state, action) => [...state, action.payload]

const hide = (state, action) => state.filter(item => item !== action.payload)

export const loading = createSlice({
  name: "loading",
  initialState: state(),
  reducers: {
    show,
    hide
  }
})

export const actions = loading.actions
