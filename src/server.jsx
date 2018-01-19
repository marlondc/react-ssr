import express from 'express';
import React from 'react';
import compression from 'compression';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import reducer from './reducers';

const app = express();
const PORT = 3000;

app.use(compression());

const renderPage = (html, preloadedState) => (
  `
    <!doctype html public="storage">
    <html lang="en">
      <head>
        <meta charset=utf-8 />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <title>React SSR</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon">
        <script type="application/javascript">
          if (window && window.navigator && window.navigator.userAgent && /Edge\\/1[0-4]\\./.test(window.navigator.userAgent)) {
            // Fix for bug in Microsoft Edge: https://github.com/Microsoft/ChakraCore/issues/1415#issuecomment-246424339
            Function.prototype.call = function(t) {
              return this.apply(t, Array.prototype.slice.apply(arguments, [1]));
            };
          }
        </script>
      </head>
      <body>
        <div id=app>${html}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
      </body>
    </html>
  `
);

const handleRender = (req, res) => {
  const store = createStore(reducer, {});

  const appHtml = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>,
  );

  const preloadedState = store.getState();

  res.send(renderPage(appHtml, preloadedState));
};

app.use(handleRender);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
