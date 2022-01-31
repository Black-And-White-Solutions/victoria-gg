import React, { VoidFunctionComponent } from 'react';
import Container from '../components/Container';
import MiniDisplayer from '../components/Displayer/MiniDisplayer';
import { ButtonLink, Image } from '../components/Displayer/DisplayerComponents';
import Carousel from '../components/Carousel/Carousel';
import { Title, Showcase } from '../components/HomeComponents';
import { size } from '../assets/mediaSizes.js';

const { mobileS, tablet } = size;

const Home: VoidFunctionComponent = () => {
  const inverted = true;

  return (
    <>
      <Carousel />
      <Container display={'flex'} flow={'column'}>
        <Title>Explora nuestras secciones</Title>
        <Showcase>
          <MiniDisplayer
            buttonChildren={
              <ButtonLink to="/catalogue" $isInverted={inverted}>
                Explorar
              </ButtonLink>
            }
            description="Lorem Ipsum"
            inverted={!inverted}
            title="Catálogo"
          >
            <Image
              $isInverted={inverted}
              srcSet={`https://i.imgur.com/SZIavr2l.jpg 640w,
										 https://i.imgur.com/SZIavr2m.jpg 320w,
										 https://i.imgur.com/SZIavr2t.jpg 160w`}
              sizes={`(max-width: ${mobileS}) 160px,
										(max-width: ${tablet}) 320w, 
										640w`}
              alt="Image"
            />
          </MiniDisplayer>
          <MiniDisplayer
            buttonChildren={
              <ButtonLink to="/about" $isInverted={!inverted}>
                Explorar
              </ButtonLink>
            }
            description="Lorem Ipsum"
            inverted={inverted}
            title="Nuestros Servicios"
          >
            <Image
              $isInverted={!inverted}
              srcSet={`https://i.imgur.com/Ql6vzlZl.jpg 640w,
										 https://i.imgur.com/Ql6vzlZm.jpg 320w,
										 https://i.imgur.com/Ql6vzlZt.jpg 160w`}
              sizes={`(max-width: ${mobileS}) 160px,
										(max-width: ${tablet}) 320w, 
										640w`}
              alt="Image"
            />
          </MiniDisplayer>
        </Showcase>
      </Container>
    </>
  );
};

export default Home;
