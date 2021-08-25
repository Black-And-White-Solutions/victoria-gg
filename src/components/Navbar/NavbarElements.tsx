import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { size } from '../../assets/mediaSizes';

const { tablet, desktopM } = size;

export const NavBar = styled.nav`
  height: 4.5rem;
  position: sticky;
  display: flex;
  background: #000;
  top: 0;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - ${desktopM}) / 2);
  z-index: 10;

  @media screen and (max-width: ${tablet}) {
    transition: 0.8s all ease;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${tablet}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 1.5rem;

  @media screen and (max-width: ${tablet}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 4.5rem;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 0.25rem;
  background: #256ce1;
  padding: 0.6rem 1.4rem;
  margin-left: 1.5rem;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010686;
  }
`;
