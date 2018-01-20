import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import reducer from './reducers';
import Routes from './routes';

const app = express();
const port = 3000;

app.use(express.static('public'));

const renderFullPage = (html, preloadedState) => (
  `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
);

const handleRender = (req, res) => {
  // Create a new Redux store instance
  const preloadedState = {
    name: 'MARLON',
    value: 0,
  };

  const store = createStore(reducer, preloadedState);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>,
  );

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState));
};

app.use(handleRender);

app.listen(port, () => console.log(`listening on port ${port}`));
