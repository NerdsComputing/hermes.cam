import { fetch } from 'camera/epics/fetch'
import { combineEpics } from 'redux-observable'
import { register } from 'camera/epics/register'

export const camera = combineEpics(fetch, register)
