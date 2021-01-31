import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './containers/app';
import DefaultLayout from './layouts/default';
import Magic from './containers/magic';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route path='/magic' component={Magic} />
    <Route path='*'>
      <DefaultLayout>
        <main>Oh Snap! You're lost...</main>
      </DefaultLayout>
    </Route>
  </Switch>
);

export default Routes;
