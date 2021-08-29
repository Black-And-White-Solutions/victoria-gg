import React, { ReactChild, VoidFunctionComponent } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import BasicComponent from '../components/BasicComponent';
import { size } from '../assets/mediaSizes';
import listOfAbout from '../assets/JSONs/About.json';

const { desktopS, tablet, mobileS } = size;

const Container = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 calc((100vw - ${desktopS}) / 2);
  grid-auto-flow: row;
`;

const ButtonLink = styled(Link)`
  display: flex;
  width: 50%;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border: none;
  margin: auto 0;
  background: #f11593;
  border-radius: 45px 0px;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  outline: none;
  text-decoration: none;

  @media screen and (max-width: ${tablet}) {
    width: 40%;
    place-self: center center;
  }
`;

const Image = styled.img`
  width: 90%;
  height: fit-content;
  border-radius: 75px 0px;

  @media screen and (max-width: ${tablet}) {
    width: 60%;
  }
`;

const About: VoidFunctionComponent = () => {
  const aboutCards: ReactChild[] = [];
  listOfAbout.forEach((item, index) => {
    const indexIsEven: boolean = index % 2 === 0;
    aboutCards.push(
      <BasicComponent
        buttonChildren={
          <ButtonLink to={item.buttonLink}>{item.buttonPlaceholder}</ButtonLink>
        }
        description={item.description}
        inverted={!indexIsEven}
        key={index}
        title={item.title}>
        <Image
          srcSet={`${item.imgSrcSetL} 640w,
									 ${item.imgSrcSetM} 320w,
									 ${item.imgSrcSetS} 160w`}
          sizes={`(max-width: ${mobileS}) 160px, (max-width: ${tablet}) 320w, 640w`}
          alt="Image"
        />
      </BasicComponent>,
    );
  });

  return <Container>{aboutCards}</Container>;
};

export default About;
