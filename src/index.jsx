import React from 'react';
import ReactDOM from 'react-dom';

import {Startup} from "./startup";
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Startup />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals();
