import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Login, Products, Register } from './pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);

export default Routes;
