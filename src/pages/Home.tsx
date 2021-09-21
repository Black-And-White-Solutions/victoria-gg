import React, { VoidFunctionComponent } from 'react';
import Carousel from '../components/Carousel/Carousel';
import { HeightContainer } from '../components/Container';

const Home: VoidFunctionComponent = () => {
  return (
    <HeightContainer display={'flex'}>
      <Carousel />
    </HeightContainer>
  );
};

export default Home;
