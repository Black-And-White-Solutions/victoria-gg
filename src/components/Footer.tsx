import React, { VoidFunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { maxMargin } from '../assets/GenericCSS';

const FooterBar = styled.div`
  ${maxMargin}
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  background: #f8f8f8;
  box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.25);
`;

const IconStyle = css`
  width: auto;
  height: 2rem;
  margin: 0 0.5rem;
  color: #f11593;
`;

const InstagramIcon = styled(FaInstagram)`
  ${IconStyle}
`;
const FacebookIcon = styled(FaFacebook)`
  ${IconStyle}
`;
const WhatsappIcon = styled(FaWhatsapp)`
  ${IconStyle}
`;

const Footer: VoidFunctionComponent = () => {
  return (
    <FooterBar>
      <p>Copyrigth © 2021 Victoria G&G. All rights reserved.</p>
      <div>
        <InstagramIcon />
        <FacebookIcon />
        <WhatsappIcon />
      </div>
    </FooterBar>
  );
};

export default Footer;
