import React, { VoidFunctionComponent } from 'react';
// import styled from 'styled-components';
// import { Grid, Cell } from 'styled-css-grid-v5';
import {
  NavBar,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const NavigationBar: VoidFunctionComponent = () => {
  return (
    <>
      <NavBar>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/first">Content</NavLink>
          <NavLink to="/second">Content</NavLink>
          <NavLink to="/third">Content</NavLink>
          <NavLink to="/forth">Content</NavLink>
          <NavLink to="/fifth">Content</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/singin">Sing In</NavBtnLink>
        </NavBtn>
      </NavBar>
    </>
  );
};

export default NavigationBar;
