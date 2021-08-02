import React from 'react'
import { Camera } from 'camera'
import { Loading } from 'loading'
import { Tracking } from 'tracking'
import { Provider } from 'react-redux'
import * as store from 'startup/store'
import { Configs } from 'startup/configs'

export const Startup = () => <Configs>
  <Provider store={store.make()}>
    <Tracking />
    <Loading />
    <Camera />
  </Provider>
</Configs>
