import React, { VoidFunctionComponent } from 'react';
import Carousel from '../components/Carousel/Carousel';
import {
  Card,
  CardShowcase,
  Image,
  ImageContainer,
  StyledContainer,
  Title,
} from '../components/HomeComponents';

const Home: VoidFunctionComponent = () => {
  return (
    <>
      <Carousel />
      <StyledContainer display={'flex'}>
        <Title>¿Qué estamos buscando?</Title>
        <CardShowcase>
          <Card to="/catalogue">
            <h2>Productos</h2>
            <ImageContainer>
              <Image src="https://i.imgur.com/SZIavr2m.jpg" alt="Image" />
            </ImageContainer>
          </Card>
          <Card to="/about">
            <h2>Información sobre la Red</h2>
            <ImageContainer>
              <Image src="https://i.imgur.com/Ql6vzlZm.jpg" alt="Image" />
            </ImageContainer>
          </Card>
        </CardShowcase>
      </StyledContainer>
    </>
  );
};

export default Home;
