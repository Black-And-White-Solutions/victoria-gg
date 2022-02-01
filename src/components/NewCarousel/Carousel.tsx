import React, {
  ReactNode,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import slides from '../../assets/JSONs/Home.json';

type CarouselSliderProps = {
  $slide?: number;
};

type CarouselButtonProps = {
  $position: 'left' | 'right';
};

const SMALL_COOLDOWN = 5000;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 512px;
`;

const CarouselSlider = styled.div<CarouselSliderProps>`
  transition: transform 0.3s;
  white-space: nowrap;
  ${({ $slide }) => `transform: translateX(-${$slide}00%)`}
`;

const CarouselSlide = styled.div`
  display: inline-flex;
  overflow: hidden;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const CarouselImage = styled.img`
  width: 100%;
  min-width: 1536px;
  height: auto;
  min-height: 100%;
`;

const CarouselButton = styled.button<CarouselButtonProps>`
  position: absolute;
  z-index: 5;
  top: 0;
  ${({ $position }) => `${$position}: 0;`}
  display: flex;
  width: 2em;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  background: #25252624;
  color: #fff;
  font-size: 4em;
`;

const Carousel: VoidFunctionComponent = () => {
  const [current, setCurrent] = useState(0);

  const carouselSlides: ReactNode[] = slides.map(value => {
    return (
      <CarouselSlide key={value.blogId}>
        <CarouselImage src={value.image} alt={value.blogId} />
      </CarouselSlide>
    );
  });

  const updateCurrentSlide: (arg: 'next' | 'prev') => void = action => {
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

  const time = SMALL_COOLDOWN;
  useEffect(() => {
    const next = current < slides.length - 1 ? current + 1 : 0;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <CarouselWrapper>
      <CarouselButton
        $position="left"
        onClick={() => updateCurrentSlide('prev')}
      >
        <FaArrowLeft />
      </CarouselButton>
      <CarouselSlider $slide={current}>{carouselSlides}</CarouselSlider>
      <CarouselButton
        $position="right"
        onClick={() => updateCurrentSlide('next')}
      >
        <FaArrowRight />
      </CarouselButton>
    </CarouselWrapper>
  );
};

export default Carousel;
