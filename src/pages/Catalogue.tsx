import React, { ReactChild, VoidFunctionComponent } from 'react';
import Container from '../components/Container';
import Displayer from '../components/Displayer/Displayer';
import { ButtonLink, Image } from '../components/Displayer/DisplayerComponents';
import { size } from '../assets/mediaSizes';
import listOfCatalogue from '../assets/JSONs/Catalogue.json';

const { tablet, mobileS } = size;

const Catalogue: VoidFunctionComponent = () => {
  const aboutCards: ReactChild[] = [];
  listOfCatalogue.forEach((item, index) => {
    const indexIsEven: boolean = index % 2 === 0;
    aboutCards.push(
      <Displayer
        buttonChildren={
          <ButtonLink to={`blog/${item.blogId}`} isInverted={indexIsEven}>
            {item.buttonPlaceholder}
          </ButtonLink>
        }
        description={item.description}
        inverted={!indexIsEven}
        key={index}
        title={item.title}
      >
        <Image
          isInverted={indexIsEven}
          srcSet={`${item.imgSrcSetL} 640w,
									 ${item.imgSrcSetM} 320w,
									 ${item.imgSrcSetS} 160w`}
          sizes={`(max-width: ${mobileS}) 160px, (max-width: ${tablet}) 320w, 640w`}
          alt="Image"
        />
      </Displayer>,
    );
  });

  return <Container>{aboutCards}</Container>;
};

export default Catalogue;
