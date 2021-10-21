import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { lineClamping, LineClampProps } from '../assets/GenericCSS';
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

type InvertedDescriptionProps = InvertedConditionProps & LineClampProps;

const Component = styled.div<InvertedConditionProps>`
  display: grid;
  width: 100%;
  height: fit-content;
  padding: 2.5rem 1.5rem;
  gap: 1.5rem;
  grid-template-areas:
    'title content'
    'description content'
    'button content';
  grid-template-columns: ${props => !props.isInverted ? '2fr 3fr' : '3fr 2fr'};
  grid-template-rows: auto;

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

const TitleArea = styled.h1<InvertedConditionProps>`
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

const DescriptionArea = styled.p<InvertedDescriptionProps>`
  ${lineClamping}
  font-size: 1.2em;
  font-weight: 400;
  grid-area: description;
  text-align: ${props => ( !props.isInverted ? 'left' : 'right')};
`;

const ButtonArea = styled.div<InvertedConditionProps>`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: ${props => ( !props.isInverted ? 'flex-start' : 'flex-end')};
  grid-area: button;

  @media screen and (max-width: ${tablet}) {
    place-content: center center;
  }
`;

const ContentArea = styled.div<InvertedConditionProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => ( !props.isInverted ? 'flex-end' : 'flex-start')};
  grid-area: content;

  @media screen and (max-width: ${tablet}) {
    place-content: center center;
  }
`;

const baseButtonStyles = css<InvertedConditionProps>`
  display: flex;
  width: 50%;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border: none;
  background: #f11593;
  border-radius: ${props => ( !props.isInverted ? '45px 0px' : '0px 45px')};
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  text-decoration: none;

  @media screen and (max-width: ${tablet}) {
    width: 12rem;
    place-self: center center;
  }
`;

export const ButtonHTML = styled.button`
  ${baseButtonStyles}
`;

export const ButtonLink = styled(Link)`
  ${baseButtonStyles}
`;

export const Image = styled.img<InvertedConditionProps>`
  width: 100%;
  height: fit-content;
  border-radius: ${props => ( !props.isInverted ? '75px 0px' : '0px 75px')};
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
      <TitleArea isInverted={inverted}>{title}</TitleArea>
      <DescriptionArea isInverted={inverted} numberOfLines={14}>
        {description}
      </DescriptionArea>
      <ButtonArea isInverted={inverted}>{buttonChildren}</ButtonArea>
      <ContentArea isInverted={inverted}>{children}</ContentArea>
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
