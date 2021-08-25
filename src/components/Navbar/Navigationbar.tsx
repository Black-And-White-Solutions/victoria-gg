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
          <NavLink to="/">Content</NavLink>
          <NavLink to="/">Content</NavLink>
          <NavLink to="/">Content</NavLink>
          <NavLink to="/">Content</NavLink>
          <NavLink to="/">Content</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">SingIn</NavBtnLink>
        </NavBtn>
      </NavBar>
    </>
  );
};

export default NavigationBar;
