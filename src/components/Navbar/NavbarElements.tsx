import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { size } from '../../assets/mediaSizes';

const { tablet, desktopM } = size;

export const NavBar = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  height: 4.5rem;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - ${desktopM}) / 2);
  background: #000;

  @media screen and (max-width: ${tablet}) {
    transition: 0.8s all ease;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &.active {
    color: #15cdfc;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${tablet}) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${tablet}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const NavBtnLink = styled(Link)`
  padding: 0.6rem 1.4rem;
  border: none;
  margin-left: 1.5rem;
  background: #256ce1;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &.hover {
    background: #fff;
    color: #010686;
    transition: all 0.2s ease-in-out;
  }
`;
