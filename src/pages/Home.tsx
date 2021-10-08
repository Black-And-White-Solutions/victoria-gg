import React, { VoidFunctionComponent } from 'react';
import Carousel from '../components/Carousel/Carousel';
import { HeightContainer } from '../components/Container';

const Home: VoidFunctionComponent = () => {
  return (
    <>
      <Carousel />
      <HeightContainer display={'flex'}></HeightContainer>
    </>
  );
};

export default Home;
