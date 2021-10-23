import React, { VoidFunctionComponent } from 'react';
import BasicComponent, {
  ButtonLink,
  Image,
} from '../components/BasicComponent';
import Carousel from '../components/Carousel/Carousel';
import { StyledContainer, Title } from '../components/HomeComponents';
import { size } from '../assets/mediaSizes.js';

const { mobileS, tablet } = size;

const Home: VoidFunctionComponent = () => {
  return (
    <>
      <Carousel />
      <StyledContainer display={'flex'}>
        <Title>¿Qué estamos buscando?</Title>
        <BasicComponent
          buttonChildren={
            <ButtonLink to="/catalogue" isInverted={false}>
              Conoce más
            </ButtonLink>
          }
          description="Lorem Ipsum"
          inverted={true}
          title="Productos"
        >
          <Image
            isInverted={false}
            srcSet={`https://i.imgur.com/SZIavr2l.jpg 640w,
										 https://i.imgur.com/SZIavr2m.jpg 320w,
										 https://i.imgur.com/SZIavr2t.jpg 160w`}
            sizes={`(max-width: ${mobileS}) 160px,
										(max-width: ${tablet}) 320w, 
										640w`}
            alt="Image"
          />
        </BasicComponent>
        <BasicComponent
          buttonChildren={
            <ButtonLink to="/about" isInverted={true}>
              Conoce más
            </ButtonLink>
          }
          description="Lorem Ipsum"
          inverted={false}
          title="Nuestros Servicios"
        >
          <Image
            isInverted={true}
            srcSet={`https://i.imgur.com/Ql6vzlZl.jpg 640w,
										 https://i.imgur.com/Ql6vzlZm.jpg 320w,
										 https://i.imgur.com/Ql6vzlZt.jpg 160w`}
            sizes={`(max-width: ${mobileS}) 160px,
										(max-width: ${tablet}) 320w, 
										640w`}
            alt="Image"
          />
        </BasicComponent>
      </StyledContainer>
    </>
  );
};

export default Home;
