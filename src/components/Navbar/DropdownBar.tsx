import React, { MouseEventHandler, VoidFunctionComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  DropdownCtA,
} from './DropdownBarElements';

type DropdownBarProps = {
  isOpen: boolean;
  toggle: MouseEventHandler;
};

const DropdownBar: VoidFunctionComponent<DropdownBarProps> = ({
  isOpen,
  toggle,
}) => {
  return (
    <Dropdown isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <DropdownLink to="/" exact onClick={toggle}>
            Inicio
          </DropdownLink>
          <DropdownLink to="/about" onClick={toggle}>
            Sobre Nosotros
          </DropdownLink>
          <DropdownLink to="/howItWorks" onClick={toggle}>
            Cómo funciona
          </DropdownLink>
          <DropdownLink to="/catalogue" onClick={toggle}>
            Catálogo
          </DropdownLink>
          <DropdownCtA to="/singIn" onClick={toggle}>
            Únete
          </DropdownCtA>
        </DropdownMenu>
      </DropdownWrapper>
    </Dropdown>
  );
};

DropdownBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default DropdownBar;
