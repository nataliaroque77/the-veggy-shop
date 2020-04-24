import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Products';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Index} />
      <Route path="/cart" component={Cart} />
      <Route path="/favorite" component={Favorite} />
    </Switch>
  </>
);
export default Routes;

