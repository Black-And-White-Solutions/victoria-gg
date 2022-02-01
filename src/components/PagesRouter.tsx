import React, {
  useEffect,
  ReactChild,
  ReactNode,
  VoidFunctionComponent,
} from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import HowItWorks from '../pages/HowItWorks';
import Catalogue from '../pages/Catalogue';
import SingIn from '../pages/SingIn';
import NotFound from '../pages/NotFound';
import Carousel from './NewCarousel/Carousel';

type ScrollToTopProps = {
  children: ReactChild[] | ReactNode;
};

const ScrollToTop: VoidFunctionComponent<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
};

const PagesRouter: VoidFunctionComponent = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/howItWorks" component={HowItWorks} />
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/singIn" component={SingIn} />
        <Route path="/victoria-gg">
          <Redirect to="/" />
        </Route>

        <Route path="/carousel" component={Carousel} />

        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </ScrollToTop>
  );
};

export default PagesRouter;
