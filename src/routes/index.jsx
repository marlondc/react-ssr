import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import About from '../containers/about';
import NotFound from '../pages/notFound';
import Nav from '../components/nav';

const App = () => (
  <div>
    <a href="#content">Skip to Content</a>
    <Nav />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
