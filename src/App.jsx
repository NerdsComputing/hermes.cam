import React, {useEffect, useRef, useState} from 'react';

import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import {load} from '@tensorflow-models/coco-ssd'
import Webcam from 'react-webcam'
import {delay, mergeMap, repeat, tap} from "rxjs/operators";
import {from} from "rxjs";

export const App = () => {
  const ref = useRef()

  const [objects, setObjects] = useState([])

  useEffect(() => {
    const subscription = from(load({base: "mobilenet_v2"}))
      .pipe(mergeMap(model => from(model.detect(ref.current.video))))
      .pipe(tap(setObjects))
      .pipe(delay(300))
      .pipe(repeat())
      .subscribe()


    return () => subscription.unsubscribe()
  }, [])

  return <>
    <Webcam ref={ref}/>
    {
      objects.map(item => <li>{item.class}</li>)
    }
  </>
}
