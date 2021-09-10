import styled from 'styled-components';
import Container from '../Container';

export const CarouselContainer = styled(Container)`
  padding: 2.5rem 2rem;
  gap: 1.5rem;
  grid-template-areas: 'carousel thumbnails';
  grid-template-columns: minmax(auto, 800px), 1fr;
`;

export const Thumbnails = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  background: #000;
  grid-area: thumbnails;
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  vertical-align: center;
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  width: auto;
  max-width: 800px;
  height: auto;
  max-height: 400px;
  grid-area: carousel;
`;
