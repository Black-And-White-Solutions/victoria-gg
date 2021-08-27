import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from '../assets/mediaSizes';

const { desktopS, tablet, mobileM } = size;

type ComponentProps = {
  buttonChildren: ReactChild[] | ReactNode;
  children?: ReactChild[] | ReactNode;
  description: string;
  title: string;
};

const Component = styled.div`
  display: grid;
  width: 100%;
  padding: 2.5rem 2rem;
  gap: 1.5rem;
  grid-template-areas:
    'title content'
    'description content'
    'button content';
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 3fr 1fr;

  @media screen and (min-width: ${tablet}) and (max-width: calc(${desktopS} - 1px)) {
    font-size: 14px;
  }

  @media screen and (max-width: calc(${tablet} - 1px)) {
    grid-template-areas:
      'title'
      'description'
      'content'
      'button';
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  @media screen and (max-width: ${tablet}) {
    font-size: 12px;
  }

  @media screen and (max-width: ${mobileM}) {
    font-size: 10px;
  }
`;

const Title = styled.h1`
  color: #ff5cb9;
  font-family: 'Dancing Script', cursive;
  font-style: normal;
  font-weight: bold;
  grid-area: title;
`;

const Description = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  grid-area: description;
`;

const Content = styled.div`
  grid-area: content;
`;

const BasicComponent: VoidFunctionComponent<ComponentProps> = ({
  buttonChildren,
  children,
  description,
  title,
}) => {
  return (
    <Component>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {buttonChildren}
      <Content>{children}</Content>
    </Component>
  );
};

BasicComponent.defaultProps = {
  description: 'Description',
  title: 'Title',
};

BasicComponent.propTypes = {
  buttonChildren: PropTypes.node,
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BasicComponent;
