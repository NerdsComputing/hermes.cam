import { camera } from 'camera/epics'
import { combineEpics } from 'redux-observable'

export const epics = combineEpics(camera)
