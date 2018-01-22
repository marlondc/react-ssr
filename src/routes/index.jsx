import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import About from '../containers/about';
import Game from '../containers/game';

import NotFound from '../pages/notFound';
import Nav from '../components/nav';

const App = () => (
  <div className="page">
    <a href="#content" className="skip-to">Skip to Content</a>
    <Nav />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/game" component={Game} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
