import React, { ReactChild, VoidFunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  Image,
  ImageSlide,
  Text,
  TextArea,
  TitleArea,
} from './CarouselComponents';
import listOfSlides from '../../assets/JSONs/Home.json';

const Carousel: VoidFunctionComponent = () => {
  const carouselSlides: ReactChild[] = [];
  listOfSlides.forEach((item, index) => {
    carouselSlides.push(
      <Slide index={index} key={`Slide${index + 1}`}>
        <TextArea>
          <TitleArea>{item.title}</TitleArea>
          <Text numberOfLines={4}>{item.description}</Text>
        </TextArea>
        <ImageSlide key={`ImageSlide${index + 1}`}>
          <Link to={`blog/${item.blogId}`}>
            <Image
              src={item.image}
              alt={`Image N°${index + 1}`}
              key={`Image${index + 1}`}
            />
          </Link>
        </ImageSlide>
      </Slide>,
    );
  });

  return (
    <CarouselProvider
      infinite={true}
      isPlaying={true}
      naturalSlideWidth={512 * 3}
      naturalSlideHeight={512}
      totalSlides={carouselSlides.length}
    >
      <Slider>{carouselSlides}</Slider>
    </CarouselProvider>
  );
};

export default Carousel;
