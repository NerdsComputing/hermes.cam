import { fetch } from 'camera/epics/fetch'
import { register } from 'camera/epics/register'
import { combineEpics } from 'redux-observable'

export const camera = combineEpics(fetch, register)
