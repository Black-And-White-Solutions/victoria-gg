import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { ReactChild, VoidFunctionComponent, useEffect, useContext, useState } from 'react';
import { Slider, Slide, CarouselContext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  CarouselWrapper,
  ImageSlide,
  Thumbnail,
  ThumbnailDescription,
  ThumbnailInfo,
  ThumbnailSlide,
  ThumbnailTitle,
} from './CarouselComponents';
import listOfSlides from '../../assets/JSONs/Home.json';

type BaseThumbnailsProviderProps = {
	listOfSlides: any[];
}

const BaseThumbnailsProvider: VoidFunctionComponent<BaseThumbnailsProviderProps> = ({ listOfSlides }) => {
	const carouselContext = useContext(CarouselContext);
	const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
	useEffect(() => {
		const onChange = () => {
			setCurrentSlide(carouselContext.state.currentSlide);
		}
		carouselContext.subscribe(onChange);
		return () => carouselContext.unsubscribe(onChange);
	}, [carouselContext])
  const thumbnailsArray: ReactChild[] = [];
  listOfSlides.forEach((item, index) => {
    thumbnailsArray.push(
      <ThumbnailSlide className={index === currentSlide ? 'active' : ''}>
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
		<div>{thumbnailsArray}</div>
	);
}

BaseThumbnailsProvider.propTypes = {
	listOfSlides:	PropTypes.array.isRequired,
}

const ThumbnailsProvider = styled(BaseThumbnailsProvider)`
  display: flex;
  width: 360px;
  height: 100%;
  flex-direction: column;
  gap: 0.5rem;
  grid-area: thumbnails;
  grid-auto-flow: row;
`;

const Carousel: VoidFunctionComponent = () => {
  const carouselSlides: ReactChild[] = [];
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
				<ThumbnailsProvider listOfSlides={listOfSlides} />
      </CarouselProvider>
    </CarouselWrapper>
  );
};

export default Carousel;
