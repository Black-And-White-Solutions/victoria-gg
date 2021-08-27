import React, { VoidFunctionComponent } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import BasicComponent from '../components/BasicComponent';
import { size } from '../assets/mediaSizes';

const { desktopS } = size;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 calc((100vw - ${desktopS}) / 2);
`;

const ButtonLink = styled(Link)`
  display: flex;
  width: 50%;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border: none;
  margin: auto 0;
  background: #f11593;
  border-radius: 45px 0px;
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  grid-area: button;
  outline: none;
  text-decoration: none;
`;

const About: VoidFunctionComponent = () => {
  return (
    <Container>
      <BasicComponent
        buttonChildren={<ButtonLink to="/">Volver a Inicio</ButtonLink>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        title="Estamos en busqueda de talentos para las ventas"></BasicComponent>
    </Container>
  );
};

export default About;
