import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

import React from 'react';

import {Behaviour} from "./behaviour";
import {Detections} from "./detections";
import {Context, useValue} from "./context";
import {Camera as CameraComponent} from "./camera";

export const Camera = () => <Context.Provider value={useValue()}>
  <Behaviour/>
  <CameraComponent/>
  <Detections/>
</Context.Provider>
