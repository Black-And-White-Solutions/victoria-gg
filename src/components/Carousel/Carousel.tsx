import React, { ReactChild, VoidFunctionComponent } from 'react';
import { Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  CarouselWrapper,
  ImageSlide,
  Thumbnail,
  ThumbnailDescription,
  ThumbnailInfo,
  ThumbnailsProvider,
  ThumbnailSlide,
  ThumbnailTitle,
} from './CarouselComponents';
import listOfSlides from '../../assets/JSONs/Home.json';

const Carousel: VoidFunctionComponent = () => {
  const carouselSlides: ReactChild[] = [];
  const thumbnailsArray: ReactChild[] = [];

  listOfSlides.forEach((item, index) => {
    carouselSlides.push(
      <Slide index={index} key={`Slide${index + 1}`}>
        <ImageSlide key={`ImageSlide${index + 1}`}>
          <img
            src={item.image}
            alt={`Image N°${index + 1}`}
            key={`Image${index + 1}`}
          />
        </ImageSlide>
      </Slide>,
    );
    thumbnailsArray.push(
      <ThumbnailSlide className={index === 1 ? 'active' : ''}>
        <ThumbnailInfo>
          <ThumbnailTitle>Title</ThumbnailTitle>
          <ThumbnailDescription>{item.description}</ThumbnailDescription>
        </ThumbnailInfo>
        <Thumbnail
          src={item.image}
          alt={`Thumbnail N°${index + 1}`}
          key={`Thumbnail${index + 1}`}
        />
      </ThumbnailSlide>,
    );
  });

  return (
    <CarouselWrapper>
      <CarouselProvider
        infinite={true}
        isPlaying={true}
        naturalSlideWidth={648}
        naturalSlideHeight={434}
        totalSlides={carouselSlides.length}
      >
        <Slider>{carouselSlides}</Slider>
      </CarouselProvider>
      <ThumbnailsProvider>{thumbnailsArray}</ThumbnailsProvider>
    </CarouselWrapper>
  );
};

export default Carousel;
