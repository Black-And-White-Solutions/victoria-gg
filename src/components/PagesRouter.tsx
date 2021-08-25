import React, { VoidFunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const PagesRouter: VoidFunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default PagesRouter;
