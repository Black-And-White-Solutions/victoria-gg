import React, { VoidFunctionComponent } from 'react';
import Carousel from '../components/Carousel/Carousel';
import Container from '../components/Container';

const Home: VoidFunctionComponent = () => {
  return (
    <Container display={'flex'}>
      <Carousel />
    </Container>
  );
};

export default Home;
