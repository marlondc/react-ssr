import 'raf/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './containers/main';
import reducer from './reducers';

// eslint-disable-next-line
const preloadedState = window.__PRELOADED_STATE__

// eslint-disable-next-line
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducer, preloadedState);

hydrate(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
