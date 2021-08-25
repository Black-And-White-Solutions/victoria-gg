import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
// import styled from 'styled-components';
// import { Grid, Cell } from 'styled-css-grid-v5';
// import { device } from './assets/mediaSizes.js';
import NavigationBar from './Navbar/Navigationbar';

type ComponentChilds = {
  children?: ReactChild[] | ReactNode;
};

const Layout: VoidFunctionComponent<ComponentChilds> = ({ children }) => {
  return (
    <BrowserRouter>
      <NavigationBar />
      {children}
    </BrowserRouter>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
