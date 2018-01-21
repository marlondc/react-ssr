import 'raf/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import reducer from './reducers';

import './assets/images/favicon.ico';
import './assets/stylesheets/app.scss';


// eslint-disable-next-line
const preloadedState = window.__PRELOADED_STATE__

// eslint-disable-next-line
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducer, preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
