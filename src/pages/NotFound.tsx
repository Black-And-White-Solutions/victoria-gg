import React, { VoidFunctionComponent } from 'react';
import styled from 'styled-components';
import { HeightContainer } from '../components/Container';
import { ButtonLink } from '../components/Displayer/DisplayerComponents';

const Logo = styled.img`
  width: 200px;
`;

const ErrorText = styled.h1`
  color: #ff5cb9;
  font-family: 'Dancing Script', cursive;
  font-size: 3em;
`;

const Text = styled.p`
  padding: 1em 0;
  font-size: 1.2em;
`;

const NotFound: VoidFunctionComponent = () => {
  return (
    <HeightContainer display="flex" flow="column">
      <Logo src={'https://i.imgur.com/KJiu7wN.png'} alt={'Victoria G&G Logo'} />
      <ErrorText>Página no encontrada</ErrorText>
      <Text>
        {
          'Lo sentimos, pero la página de nuestro sitio a la que trataba de acceder no existe'
        }
      </Text>
      <ButtonLink to="/">Volver al Inicio</ButtonLink>
    </HeightContainer>
  );
};

export default NotFound;
