import React, { useState, ReactChild, VoidFunctionComponent } from 'react';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselContextController,
  Image,
  ImageSlide,
  Text,
  TextArea,
  TitleArea,
} from './CarouselComponents';
import listOfSlides from '../../assets/JSONs/Home.json';

const Carousel: VoidFunctionComponent = () => {
  const [clickFlag, setClickFlag] = useState<boolean>(false);

  const triggerLongCooldown = () => {
    setClickFlag(true);
  };

  const carouselSlides: ReactChild[] = [];
  listOfSlides.forEach((item, index) => {
    carouselSlides.push(
      <Slide
        index={index}
        key={`Slide${index + 1}`}
        onClick={() => triggerLongCooldown()}
      >
        <TextArea>
          <TitleArea>{item.title}</TitleArea>
          <Text numberOfLines={4}>{item.description}</Text>
        </TextArea>
        <ImageSlide key={`ImageSlide${index + 1}`}>
          <Image
            src={item.image}
            alt={`Image N°${index + 1}`}
            key={`Image${index + 1}`}
          />
        </ImageSlide>
      </Slide>,
    );
  });

  return (
    <CarouselProvider
      naturalSlideWidth={512 * 3}
      naturalSlideHeight={512}
      totalSlides={carouselSlides.length}
    >
      <CarouselContextController
        slideNumber={carouselSlides.length}
        clickFlag={clickFlag}
        setClickFlag={setClickFlag}
      />
      <Slider>{carouselSlides}</Slider>
    </CarouselProvider>
  );
};

export default Carousel;
