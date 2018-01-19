import 'raf/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './routes';
import rootReducer from './reducers';

let preloadedState = {};

if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  preloadedState = window.__PRELOADED_STATE__;
  // eslint-disable-next-line
  delete window.__PRELOADED_STATE__;
}

const store = createStore(rootReducer, preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
