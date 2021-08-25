import React, { MouseEventHandler, VoidFunctionComponent } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Grid, Cell } from 'styled-css-grid-v5';
import { FaBars } from 'react-icons/fa';
import {
  NavBar,
  Logo,
  NavLink,
  NavItem,
  MobileIcon,
  NavMenu,
  NavBtnLink,
} from './NavbarElements';

type NavigationBarProps = {
  toggle: MouseEventHandler;
};

const NavigationBar: VoidFunctionComponent<NavigationBarProps> = ({
  toggle,
}) => {
  return (
    <>
      <NavBar>
        <NavLink to="/" exact activeClassName="ignore">
          <Logo src="https://i.imgur.com/KJiu7wN.png" alt="Victoria G&G" />
        </NavLink>
        <MobileIcon onClick={toggle}>
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
            <NavBtnLink to="/singin">Únete</NavBtnLink>
          </NavItem>
        </NavMenu>
      </NavBar>
    </>
  );
};

NavigationBar.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default NavigationBar;
