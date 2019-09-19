import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Pokemon from '~/pages/Pokemon';
import Catch from '~/pages/Catch';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Catch" component={Catch} />
      <Route path="/pokemon/:slug" component={Pokemon} />
    </Switch>
  );
}
