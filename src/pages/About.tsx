import React, { ReactChild, VoidFunctionComponent } from 'react';
import styled from 'styled-components';
import BasicComponent, {
  ButtonLink,
  Image,
} from '../components/BasicComponent';
import { size } from '../assets/mediaSizes';
import listOfAbout from '../assets/JSONs/About.json';

const { desktopS, tablet, mobileS } = size;

const Container = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 calc((100vw - ${desktopS}) / 2);
  grid-auto-flow: row;
`;

const About: VoidFunctionComponent = () => {
  const aboutCards: ReactChild[] = [];
  listOfAbout.forEach((item, index) => {
    const indexIsEven: boolean = index % 2 === 0;
    aboutCards.push(
      <BasicComponent
        buttonChildren={
          <ButtonLink to={item.buttonLink} isInverted={indexIsEven}>
            {item.buttonPlaceholder}
          </ButtonLink>
        }
        description={item.description}
        inverted={!indexIsEven}
        key={index}
        title={item.title}>
        <Image
          isInverted={indexIsEven}
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
