import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import {of} from 'rxjs'

import React, { useEffect, useRef, useState } from 'react'

import $ from 'jquery'
import { Behaviour } from 'camera/behaviour'
import { Detections } from 'camera/detections'
import { useValue, Context } from 'camera/context'
import { Camera as CameraComponent } from 'camera/camera'
import Recorder from 'react-mp3-recorder'
import { delay, repeat, tap } from 'rxjs/operators'

export const Camera = () => {
  const [state, setState] = useState(null)

  const onStop = blob => {
    fetch('http://localhost:5000/prediction', {method: 'POST', body: blob.blob})
      .then(x => console.log('hai sa bem'))
      .catch(error => console.log('da-l dreaq'))
  }

  useEffect(() => {
    of({})
      .pipe(tap(() => setState(RecordState.START)))
      .pipe(delay(5000))
      .pipe(tap(() => setState(RecordState.STOP)))
      .pipe(repeat())
      .subscribe()
  }, [])

  return <Context.Provider value={useValue()}>
    <Behaviour />
    <CameraComponent />
    <Detections />

    <div className={'hidden'}>
      <AudioReactRecorder state={state} onStop={onStop} />
    </div>
  </Context.Provider>
}
