import { fetch } from 'settings/epics/fetch'
import { combineEpics } from 'redux-observable'
import { register } from 'camera/epics/register'

export const epics = combineEpics(fetch, register)
