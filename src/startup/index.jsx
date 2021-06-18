import React from 'react'
import { Provider } from 'react-redux'

import { Camera } from 'camera'
import { Loading } from 'loading'
import { Settings } from 'settings'
import { Tracking } from 'tracking'
import * as store from 'startup/store'

export const Startup = () => <Provider store={store.make()}>
  <Settings>
    <Tracking />
    <Loading />
    <Camera />
  </Settings>
</Provider>
