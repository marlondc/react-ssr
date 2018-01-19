import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../containers/main';
import Marlon from '../containers/marlon';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/marlon" component={Marlon} />
    </Switch>
  </div>
);

export default App;
