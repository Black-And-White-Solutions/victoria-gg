import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { size } from '../../assets/mediaSizes';

const { tablet } = size;

export const NavBar = styled.nav`
  height: 4.5rem;
  display: flex;
  background: #000;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1024px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -1.5rem;

  @media screen and (max-width: ${tablet}) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media screen and (max-width: ${tablet}) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 0.25rem;
  background: #256ce1;
  padding: 0.6rem 1.4rem;
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
