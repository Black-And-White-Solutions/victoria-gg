import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { size } from '../../assets/mediaSizes';

const { mobileL } = size;

type SidebarProps = {
  isOpen: boolean;
};

export const Dropdown = styled.aside<SidebarProps>`
  position: fixed;
  z-index: 999;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  background: #fff0f0;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  font-size: 1.8rem;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #ff5cb9;
`;

export const DropdownWrapper = styled.div`
  color: #fff;
`;

export const DropdownMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 5rem);
  text-align: center;

  @media screen and (max-width: ${mobileL}) {
    grid-template-rows: repeat(6, 4rem);
  }
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #ff5cb9;
    transition: 0.2s ease-in-out;
  }
`;

export const DropdownBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const DropdownCtA = styled(Link)`
  padding: 1rem 4rem;
  border: none;
  background: #256ce1;
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  outline: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: #fff;
    color: #ff5cb9;
    transition: all 0.2s ease-in-out;
  }
`;
