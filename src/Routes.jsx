import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home, Login, Products, Register } from './pages';

const links = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/login',
    title: 'Login',
  },
  {
    url: '/products',
    title: 'Products',
  },
  {
    url: '/register',
    title: 'Register',
  },
];

const Routes = () => (
  <Router>
    <Header links={links} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/register" component={Register} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
