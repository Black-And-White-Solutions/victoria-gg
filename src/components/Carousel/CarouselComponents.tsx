import styled from 'styled-components';
import { Slider } from 'pure-react-carousel';

/*
type ThumbnailImage = {
  src: string;
};
 */

export const SliderProvider = styled(Slider)``;

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
  position: absolute;
  z-index: 10;
  bottom: 0;
  display: flex;
  width: inherit;
  height: 5rem;
  flex-direction: column;
  padding: 1rem 2rem;
  background: #25252633;
  color: #ffffff;
`;

export const TitleArea = styled.div`
  position: relative;
  top: -3rem;
  left: 2rem;
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
  --lh: 1.4rem;
  display: box;
  overflow: hidden;
  box-orient: vertical;
  font-size: 1.2rem;
  -webkit-line-clamp: 2;
  line-height: var(--lh);
`;

/*
export const Thumbnail = styled.div<ThumbnailImage>`
  width: 90px;
  height: 90px;
  margin: 0 0.5rem;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
`;

export const ThumbnailDescription = styled.div`
  display: box;
  overflow: hidden;
  font-size: 0.9rem;
  -webkit-line-clamp: 3;
`;

export const ThumbnailInfo = styled.div`
  display: flex;
  width: 16rem;
  height: 85%;
  flex-direction: column;
  padding-left: 2rem;
`;

export const ThumbnailsProvider = styled.div`
  display: grid;
  width: 344px;
  height: 100%;
  gap: 0.5rem;
  grid-area: thumbnails;
  grid-auto-flow: row;
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
 */
