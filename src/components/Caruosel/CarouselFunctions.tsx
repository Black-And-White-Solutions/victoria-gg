import React from 'react';

type CarouselValueTypes = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  array: [];
};

export const goPrevSlide = ({ state, setState, array }: CarouselValueTypes) => {
  let index = state;
  const lenght = array.length;
  if (index < 1) {
    index = lenght - 1;
  } else {
    index--;
  }
  setState(index);
};

export const goNextSlide = ({ state, setState, array }: CarouselValueTypes) => {
  let index = state;
  const length = array.length;
  if (index === length - 1) {
    index = 0;
  } else {
    index++;
  }
  setState(index);
};
