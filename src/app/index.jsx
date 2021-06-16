import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

import React from 'react';

import {Camera} from "./camera";
import {Behaviour} from "./behaviour";
import {Detections} from "./detections";
import {Context, useValue} from "./context";

export const App = () => <Context.Provider value={useValue()}>
  <Behaviour/>
  <Camera/>
  <Detections/>
</Context.Provider>
