import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import { NavLink as Link } from 'react-router-dom';
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
  grid-template-columns: ${props => !props.isInverted ? '2fr 3fr' : '3fr 2fr'};
  grid-template-rows: 1fr 3fr 1fr;

  ${props =>
    props.isInverted &&
    css`
      grid-template-areas:
        'content title'
        'content description'
        'content button';
    `}

  @media screen and (max-width: calc(${desktopS})) {
    font-size: 14px;
  }

  @media screen and (max-width: calc(${tablet})) {
    font-size: 12px;
    grid-template-areas:
      'title'
      'description'
      'content'
      'button';
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  @media screen and (max-width: calc(${mobileM} - 1px)) {
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

export const ButtonLink = styled(Link)<InvertedConditionProps>`
  display: flex;
  width: 50%;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border: none;
  margin: auto 0;
  background: #f11593;
  border-radius: ${props => ( !props.isInverted ? '45px 0px' : '0px 45px')};
  color: #fff;
  font-style: normal;
  font-weight: 600;
  outline: none;
  text-decoration: none;

  @media screen and (max-width: ${tablet}) {
    width: 12rem;
    place-self: center center;
  }
`;

export const Image = styled.img<InvertedConditionProps>`
  width: 100%;
  height: fit-content;
  border-radius: ${props => ( !props.isInverted ? '75px 0px' : '0px 75px')};
`;

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
