import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Grid } from 'styled-css-grid-v5';
// import { device } from './assets/mediaSizes.js';
import NavigationBar from './Navbar/Navigationbar';

type ComponentChilds = {
  children?: ReactChild[] | ReactNode;
};

const Layout: VoidFunctionComponent<ComponentChilds> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
