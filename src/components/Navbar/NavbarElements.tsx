import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { size } from '../../assets/mediaSizes';

const { tablet, desktopS } = size;

export const NavBar = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - ${desktopS}) / 2);
  background: #f8f8f8;

  @media screen and (max-width: ${tablet}) {
    transition: 0.8s all ease;
  }
`;

export const Logo = styled.img`
  display: flex;
  width: auto;
  height: 5rem;
  align-items: center;
  padding: 0.5rem 0rem;
`;

export const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1.5rem;
  color: #000;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;

  &.active {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(235, 158, 202, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${tablet}) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    color: #ff5cb9;
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
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  outline: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #ff5cb9;
    transition: all 0.2s ease-in-out;
  }
`;
