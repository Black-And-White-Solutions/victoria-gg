import styled from 'styled-components';
import { CarouselProvider as Carousel } from 'pure-react-carousel';

export const CarouselProvider = styled(Carousel)`
  width: 648px;
  height: 434px;
  grid-area: carousel;
`;

export const CarouselWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-areas: 'carousel thumbnails';
  grid-template-columns: 648px 1fr;
`;

export const ImageSlide = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Thumbnail = styled.img`
  width: auto;
  height: 90%;
  padding: 0 0.5rem;
`;

export const ThumbnailDescription = styled.div`
  display: box;
  overflow: hidden;
  font-size: 0.9rem;
  -webkit-line-clamp: 3;
`;

export const ThumbnailInfo = styled.div`
  display: flex;
  width: auto;
  height: 85%;
  flex-direction: column;
  padding-left: 2rem;
`;

export const ThumbnailSlide = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background: #575155;
  color: #fff;

  &.active {
    height: 110px;
    background: #eb9eca;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);

    &:before {
      position: relative;
      left: -50px;
      width: 0;
      height: 0;
      border-top: 55px solid transparent;
      border-right: 50px solid #eb9eca;
      border-bottom: 55px solid transparent;
      margin-right: -60px;
      content: '';
    }
  }
`;

export const ThumbnailTitle = styled.p`
  font-size: 1.5rem;
`;
