import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { size } from '../assets/mediaSizes';

const { desktopS, tablet, mobileM } = size;

type ComponentProps = {
  buttonChildren: ReactChild[] | ReactNode;
  children?: ReactChild[] | ReactNode;
  description: string;
  inverted?: boolean;
  title: string;
};

type InvertedConditionProps = {
  isInverted?: boolean;
};

const Component = styled.div<InvertedConditionProps>`
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

  ${props =>
    props.isInverted &&
    css`
      grid-template-areas:
        'content title'
        'content description'
        'content button';
      grid-template-columns: 3fr 2fr;
    `}

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

const Title = styled.h1<InvertedConditionProps>`
  color: #ff5cb9;
  font-family: 'Dancing Script', cursive;
  font-style: normal;
  font-weight: 700;
  grid-area: title;
  text-align: start;

  ${props =>
    props.isInverted &&
    css`
      text-align: end;
    `}
`;

const Description = styled.p<InvertedConditionProps>`
  font-size: 1.2em;
  font-weight: 500;
  grid-area: description;
  text-align: ${props => ( !props.isInverted ? 'left' : 'right')};
`;

const Button = styled.div<InvertedConditionProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${props => ( !props.isInverted ? 'flex-start' : 'flex-end')};
  grid-area: button;

  @media screen and (max-width: ${tablet}) {
    place-content: center center;
  }
`;

const Content = styled.div<InvertedConditionProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => ( !props.isInverted ? 'flex-end' : 'flex-start')};
  grid-area: content;

  @media screen and (max-width: ${tablet}) {
    place-content: center center;
  }
`;

const BasicComponent: VoidFunctionComponent<ComponentProps> = ({
  buttonChildren,
  children,
  description,
  inverted,
  title,
}) => {
  return (
    <Component isInverted={inverted}>
      <Title isInverted={inverted}>{title}</Title>
      <Description isInverted={inverted}>{description}</Description>
      <Button isInverted={inverted}>{buttonChildren}</Button>
      <Content isInverted={inverted}>{children}</Content>
    </Component>
  );
};

BasicComponent.defaultProps = {
  description: 'Description',
  inverted: false,
  title: 'Title',
};

BasicComponent.propTypes = {
  buttonChildren: PropTypes.node,
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default BasicComponent;
