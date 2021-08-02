import { combineEpics } from 'redux-observable'
import { register } from 'camera/epics/register'

export const epics = combineEpics(register)
