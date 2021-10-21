import styled from 'styled-components';
import { maxMargin } from '../../assets/GenericCSS';

export const Image = styled.img`
  width: 100%;
`;

export const ImageSlide = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: inherit;
  height: inherit;
  transform: translate(-50%, -50%);
`;

export const TextArea = styled.div`
  ${maxMargin}
  position: absolute;
  z-index: 10;
  bottom: 0;
  display: flex;
  width: inherit;
  height: 5rem;
  flex-direction: column;
  background: #25252633;
  color: #ffffff;
`;

export const TitleArea = styled.div`
  position: relative;
  top: -3rem;
  left: 3rem;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;
  margin-right: -2rem;
  margin-bottom: -3rem;
  background: #eb9ecabf;
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
`;

export const Text = styled.p`
  display: box;
  overflow: hidden;
  padding: 0 1.5rem;
  box-orient: vertical;
  font-size: 1.2rem;
  -webkit-line-clamp: 2;
  line-height: 1.4rem;
  text-overflow: ellipsis;
`;
