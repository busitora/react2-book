import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigInterface, SWRConfig } from 'swr';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const swrConfig: ConfigInterface = {
  dedupingInterval: 60000,
  shouldRetryOnError: false,
  suspense: true,
};

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <SWRConfig value={swrConfig}>
    <App />
  </SWRConfig>,
);

serviceWorker.unregister();