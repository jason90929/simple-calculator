import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '@/Layouts/Home';
import RouterBinder from './RouterBinder';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <RouterBinder>
          <Route
            exact
            path="/"
            component={Home}
          />
        </RouterBinder>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
