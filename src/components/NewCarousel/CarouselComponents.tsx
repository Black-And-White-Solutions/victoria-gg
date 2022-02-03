import styled from 'styled-components';
import { maxMargin } from '../../assets/GenericCSS';
import { size } from '../../assets/mediaSizes';

const { tablet, mobileL } = size;

type CarouselSliderProps = {
  $slide?: number;
};

type CarouselHoveredProps = {
  $hovered?: boolean;
};

type CarouselButtonProps = {
  $position: 'left' | 'right';
};

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 512px;

  @media screen and (max-width: ${mobileL}) {
    height: calc(100vh - 10rem);
  }
`;

export const CarouselSlider = styled.div<CarouselSliderProps>`
  height: inherit;
  transition: transform 0.3s;
  white-space: nowrap;
  ${({ $slide }) => `transform: translateX(-${$slide}00%)`}
`;

export const CarouselSlide = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: inherit;
  color: #fff;
`;

export const CarouselImage = styled.img<CarouselHoveredProps>`
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  min-width: 1536px;
  height: auto;
  min-height: 100%;
  margin: 0;
  transform: translate(-50%, -50%);
  transition: linear 0.5s;

  ${({ $hovered }) =>
    $hovered
      ? `
		filter: brightness(80%);
	`
      : ``}
`;

export const CarouselButton = styled.button<CarouselButtonProps>`
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
  cursor: pointer;
  font-size: 4em;
  transition: linear 0.1s;

  &:hover {
    background: #25252680;
    transition: linear 0.5s;
  }

  &:active {
    border: none;
    background: #fff;
    color: #252526;
  }

  @media screen and (max-width: ${mobileL}) {
    width: 50%;
    height: 2em;
  }
`;

export const TextArea = styled.div<CarouselHoveredProps>`
  ${maxMargin}
  position: absolute;
  z-index: 10;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 10rem;
  flex-direction: column;
  justify-content: center;
  background: #25252664;
  color: #ffffff;
  gap: 0;
  transition: 0.2s linear;

  @media screen and (min-width: ${mobileL}) and (max-width: ${tablet}) {
    height: 13em;
  }

  @media screen and (max-width: ${mobileL}) {
    background: #25252660;
    ${({ $hovered }) => {
      if ($hovered) return 'height: 60%;';
    }}
  }
`;

export const TextTitle = styled.div`
  position: relative;
  top: -7rem;
  left: 3rem;
  width: fit-content;
  height: fit-content;
  padding: 2rem 4rem;
  margin-right: -2rem;
  margin-bottom: -6rem;
  background: #eb9ecabf;
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;

  @media screen and (max-width: ${tablet}) {
    left: 0;
    width: 100%;
    margin-right: 0;
    white-space: normal;
    word-break: normal;
  }

  @media screen and (max-width: ${mobileL}) {
    background: #eb9eca80;
  }
`;

export const TextContent = styled.p`
  overflow: hidden;
  padding: 0 1.5rem;
  font-size: 1.2rem;
  line-height: 1.4rem;
  white-space: normal;
  word-break: normal;
`;
