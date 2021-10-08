import React, {
  ReactChild,
  VoidFunctionComponent,
  //  useEffect,
  //  useContext,
  //  useState,
} from 'react';
// import PropTypes from 'prop-types';
import {
  CarouselProvider,
  Slide /* CarouselContext */,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  Image,
  ImageSlide,
  SliderProvider,
  Text,
  TextArea,
  TitleArea,
  //  Thumbnail,
  //  ThumbnailDescription,
  //  ThumbnailInfo,
  //  ThumbnailsProvider,
  //  ThumbnailSlide,
  //  ThumbnailTitle,
} from './CarouselComponents';
import listOfSlides from '../../assets/JSONs/Home.json';

/*
type BaseThumbnailsProviderProps = {
  listOfSlides: any[];
};

const BaseThumbnailsProvider: VoidFunctionComponent<BaseThumbnailsProviderProps> =
  ({ listOfSlides }) => {
    const carouselContext = useContext(CarouselContext);
    const [currentSlide, setCurrentSlide] = useState(
      carouselContext.state.currentSlide,
    );

    useEffect(() => {
      const onChange = () => {
        setCurrentSlide(carouselContext.state.currentSlide);
      };
      carouselContext.subscribe(onChange);
      return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);

    const thumbnailsArray: ReactChild[] = [];
    listOfSlides.forEach((item, index) => {
      thumbnailsArray.push(
        <ThumbnailSlide className={index === currentSlide ? 'active' : ''}>
          <ThumbnailInfo>
            <ThumbnailTitle>{item.title}</ThumbnailTitle>
            <ThumbnailDescription>{item.description}</ThumbnailDescription>
          </ThumbnailInfo>
          <Thumbnail src={item.image} key={`Thumbnail${index + 1}`} />
        </ThumbnailSlide>,
      );
    });

    return <>{thumbnailsArray}</>;
  };

BaseThumbnailsProvider.propTypes = {
  listOfSlides: PropTypes.array.isRequired,
};

 */
const Carousel: VoidFunctionComponent = () => {
  const carouselSlides: ReactChild[] = [];
  listOfSlides.forEach((item, index) => {
    carouselSlides.push(
      <Slide index={index} key={`Slide${index + 1}`}>
        <TextArea>
          <TitleArea>{item.title}</TitleArea>
          <Text>{item.description}</Text>
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
      infinite={true}
      isPlaying={true}
      naturalSlideWidth={512 * 3}
      naturalSlideHeight={512}
      isIntrinsicHeight={true}
      totalSlides={carouselSlides.length}
    >
      <SliderProvider>{carouselSlides}</SliderProvider>
      {/*
      <ThumbnailsProvider>
        <BaseThumbnailsProvider listOfSlides={listOfSlides} />
      </ThumbnailsProvider>
			*/}
    </CarouselProvider>
  );
};

export default Carousel;
