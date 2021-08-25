import React, {
  /* MouseEventHandler, useState, */ VoidFunctionComponent,
} from 'react';
// import styled from 'styled-components';
// import { Grid, Cell } from 'styled-css-grid-v5';
import { FaBars } from 'react-icons/fa';
import {
  NavBar,
  NavLink,
  NavItem,
  MobileIcon,
  NavMenu,
  NavBtnLink,
} from './NavbarElements';

const NavigationBar: VoidFunctionComponent = () => {
  /* const [toggle, setToggle] = useState(false);

	const toggleNavbar: MouseEventHandler = e => {
		e.preventDefault();
		setToggle(!toggle);
	} */

  return (
    <>
      <NavBar>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="/" exact>
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">Sobre Nosotros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/howItWorks">Cómo funciona</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catalogue">Catálogo</NavLink>
          </NavItem>
          <NavItem>
            <NavBtnLink to="/singin">Sing In</NavBtnLink>
          </NavItem>
        </NavMenu>
      </NavBar>
    </>
  );
};

export default NavigationBar;
