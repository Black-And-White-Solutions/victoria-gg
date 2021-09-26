import React, { VoidFunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import HowItWorks from '../pages/HowItWorks';
import Catalogue from '../pages/Catalogue';
import SingIn from '../pages/SingIn';
import BlogEntry from './BlogEntry/BlogEntry';

const PagesRouter: VoidFunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/howItWorks" component={HowItWorks} />
      <Route path="/catalogue" component={Catalogue} />
      <Route path="/singIn" component={SingIn} />
      <Route path="/blog/:blogId" component={BlogEntry} />
    </Switch>
  );
};

export default PagesRouter;
