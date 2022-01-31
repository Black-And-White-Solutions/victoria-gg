import React, { VoidFunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { maxMargin } from '../assets/GenericCSS';
import { size } from '../assets/mediaSizes';

const { tablet } = size;

const FooterBar = styled.div`
  ${maxMargin}
  display: flex;
  height: 5em;
  align-items: center;
  justify-content: space-between;
  background: #f8f8f8;

  @media screen and (max-width: ${tablet}) {
    flex-direction: column;
  }
`;

const FooterText = styled.p`
  padding: 0 1.5em;
`;

const IconStyle = css`
  width: auto;
  height: 2em;
  color: #000000;
  transition: ease-in 0.3s;

  &:hover {
    color: #f11593;
    transition: ease-out 0.3s;
  }
`;

const FooterIcons = styled.div`
  display: flex;
  padding: 0 1.5em;
  gap: 1em;
`;

const InstagramIcon = styled(FaInstagram)`
  ${IconStyle}
`;
const WhatsappIcon = styled(FaWhatsapp)`
  ${IconStyle}
`;

const Footer: VoidFunctionComponent = () => {
  return (
    <FooterBar>
      <FooterText>
        Copyrigth © 2022 Victoria G&G. All rights reserved.
      </FooterText>
      <FooterIcons>
        <a
          href="https://www.instagram.com/victoria.empresa/"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a href="https://wa.link/zr1vn1" rel="noreferrer" target="_blank">
          <WhatsappIcon />
        </a>
      </FooterIcons>
    </FooterBar>
  );
};

export default Footer;
