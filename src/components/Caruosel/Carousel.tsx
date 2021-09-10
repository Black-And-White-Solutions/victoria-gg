import React, { ReactChild, VoidFunctionComponent } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CarouselContainer,
  CarouselWrapper,
  Image,
  Thumbnails,
} from './CarouselComponents';
import listOfCarousel from '../../assets/JSONs/Home.json';

const Carousel: VoidFunctionComponent = () => {
  const carouselEntries: ReactChild[] = [];
  listOfCarousel.forEach((item, index) => {
    carouselEntries.push(<Image src={item.image} alt="Image" key={index} />);
  });

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <ReactCarousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          autoFocus={true}
          showThumbs={false}>
          {carouselEntries}
        </ReactCarousel>
      </CarouselWrapper>
      <Thumbnails />
    </CarouselContainer>
  );
};

export default Carousel;
