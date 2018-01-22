import 'raf/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import reducer from './reducers';
import game from './reducers/game';

import './assets/images/favicon.ico';
import './assets/stylesheets/app.scss';


// eslint-disable-next-line
const preloadedState = window.__PRELOADED_STATE__

// eslint-disable-next-line
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(
  combineReducers({
    reducer,
    game,
  }),
  preloadedState,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // uncomment for devtools
);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
