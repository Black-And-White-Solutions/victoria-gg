import React, { VoidFunctionComponent } from 'react';
import Displayer from '../components/Displayer/Displayer';
import { ButtonLink, Image } from '../components/Displayer/DisplayerComponents';
import Carousel from '../components/Carousel/Carousel';
import { Title, Showcase, StyledContainer } from '../components/HomeComponents';
import { size } from '../assets/mediaSizes.js';

const { mobileS, tablet } = size;

const Home: VoidFunctionComponent = () => {
  return (
    <>
      <Carousel />
      <StyledContainer display={'flex'}>
        <Title>¿Qué estamos buscando?</Title>
        <Showcase>
          <Displayer
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
          </Displayer>
          <Displayer
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
          </Displayer>
        </Showcase>
      </StyledContainer>
    </>
  );
};

export default Home;
