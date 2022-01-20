import styled, { css } from 'styled-components';
import { lineClamping, maxMargin } from '../../assets/GenericCSS';

export const Image = styled.img`
  width: 100%;
`;

export const ImageSlide = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: inherit;
  height: inherit;
  transform: translate(-50%);
`;

export const CarouselButton = css`
  position: absolute;
  width: 10%;
  height: inherit;
`;

export const TextArea = styled.div`
  ${maxMargin}
  position: absolute;
  z-index: 10;
  bottom: 0;
  display: flex;
  width: inherit;
  height: 10rem;
  flex-direction: column;
  justify-content: center;
  background: #25252664;
  color: #ffffff;
  gap: 0;
`;

export const TitleArea = styled.div`
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
`;

export const Text = styled.p`
  ${lineClamping}
  padding: 0 1.5rem;
  font-size: 1.2rem;
  line-height: 1.4rem;
`;
