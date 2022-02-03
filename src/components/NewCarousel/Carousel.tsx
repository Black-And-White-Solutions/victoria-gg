import React, {
  ReactNode,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  CarouselButton,
  CarouselImage,
  CarouselSlide,
  CarouselSlider,
  CarouselWrapper,
  TextArea,
  TextContent,
  TextTitle,
} from './CarouselComponents';
import slides from '../../assets/JSONs/Home.json';

const COOLDOWN = 5000;

const Carousel: VoidFunctionComponent = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const carouselSlides: ReactNode[] = slides.map(value => {
    return (
      <CarouselSlide key={value.blogId}>
        <TextArea $hovered={hovered}>
          <TextTitle>{value.title}</TextTitle>
          <TextContent>{value.description}</TextContent>
        </TextArea>
        <CarouselImage
          src={value.image}
          alt={value.blogId}
          $hovered={hovered}
        />
      </CarouselSlide>
    );
  });

  const updateCurrentSlide: (arg0: 'next' | 'prev') => void = action => {
    switch (action) {
      case 'next':
        return current < slides.length - 1
          ? setCurrent(current + 1)
          : setCurrent(0);
      case 'prev':
        return current === 0
          ? setCurrent(slides.length - 1)
          : setCurrent(current - 1);
    }
  };

  const time = COOLDOWN;
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) updateCurrentSlide('next');
    }, time);
    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    <CarouselWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CarouselButton
        $position="left"
        onClick={() => updateCurrentSlide('prev')}
      >
        <FaChevronLeft />
      </CarouselButton>
      <CarouselSlider $slide={current}>{carouselSlides}</CarouselSlider>
      <CarouselButton
        $position="right"
        onClick={() => updateCurrentSlide('next')}
      >
        <FaChevronRight />
      </CarouselButton>
    </CarouselWrapper>
  );
};

export default Carousel;
