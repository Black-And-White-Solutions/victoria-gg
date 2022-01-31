import React, { ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { lineClamping, LineClampProps } from '../../assets/GenericCSS';
import { size } from '../../assets/mediaSizes';

const { tablet, mobileM } = size;

// Displayer and MiniDisplayer shared props.
export type ComponentTypeProps = {
  buttonChildren?: ReactChild[] | ReactNode;
  children?: ReactChild[] | ReactNode;
  description: string;
  inverted?: boolean;
  numberOfLines?: number;
  title: string;
};

export const ComponentDefaultProps = {
  buttonChildren: <></>,
  description: 'Description',
  inverted: false,
  title: 'Title',
};

export const ComponentPropTypes = {
  buttonChildren: PropTypes.node,
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  numberOfLines: PropTypes.number,
  title: PropTypes.string.isRequired,
};

// Styled Componets types
type InvertedConditionProps = {
  $isInverted?: boolean;
};

type ContentAreaProps = {
  $mini?: boolean;
};

type CustomButtonProps = {
  fontSize?: string;
};

// Styled Components
const ComponentSharedStyles = css<InvertedConditionProps>`
  display: grid;
  width: 100%;
  height: fit-content;
  padding: 2.5rem 1.5rem;
  grid-template-areas:
    'title content'
    'description content'
    'button content';
  grid-template-rows: auto;

  ${props =>
    props.$isInverted &&
    css`
      grid-template-areas:
        'content title'
        'content description'
        'content button';
    `}

  @media screen and (max-width: ${tablet}) {
    grid-template-areas:
      'title'
      'description'
      'content'
      'button';
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  @media screen and (max-width: ${mobileM}) {
    font-size: 10px;
  }
`;

export const Component = styled.div<InvertedConditionProps>`
  ${ComponentSharedStyles}
  gap: 1.5rem;
  grid-template-columns: ${({ $isInverted }) =>
    $isInverted ? '2fr 3fr' : '3fr 2fr'};
`;

export const MiniComponent = styled.div<InvertedConditionProps>`
  ${ComponentSharedStyles}
  gap: 0.5rem;
  grid-template-columns: ${({ $isInverted }) =>
    $isInverted ? '1fr 0.75fr' : '0.75fr 1fr'};

  @media screen and (max-width: ${tablet}) {
    justify-items: center;
  }
`;

export const TitleArea = styled.h1<InvertedConditionProps>`
  color: #ff5cb9;
  font: normal normal 700 2rem 'Dancing Script', cursive;
  grid-area: title;
  text-align: start;

  ${props =>
    props.$isInverted &&
    css`
      text-align: end;
    `}
`;

export const DescriptionArea = styled.p<
  InvertedConditionProps & LineClampProps
>`
  ${lineClamping}
  font-size: 1.2rem;
  font-weight: 400;
  grid-area: description;
  text-align: ${({ $isInverted }) => ($isInverted ? 'left' : 'right')};
`;

export const ButtonArea = styled.div<InvertedConditionProps>`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: ${({ $isInverted }) =>
    $isInverted ? 'flex-start' : 'flex-end'};
  grid-area: button;

  @media screen and (max-width: ${tablet}) {
    place-content: center center;
  }
`;

export const ContentArea = styled.div<
  ContentAreaProps & InvertedConditionProps
>`
  display: flex;
  align-items: center;
  justify-content: ${({ $isInverted }) =>
    $isInverted ? 'flex-end' : 'flex-start'};
  grid-area: content;
  ${({ $mini }) =>
    $mini
      ? `
				height: 15em;
				width: 15em;
			`
      : ``}

  @media screen and (max-width: ${tablet}) {
    place-content: center center;
  }
`;

const baseButtonStyles = css<InvertedConditionProps & CustomButtonProps>`
  display: flex;
  width: 50%;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border: none;
  background: #f11593;
  border-radius: ${({ $isInverted }) =>
    $isInverted ? '45px 0px' : '0px 45px'};
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: 600;
  outline: none;
  text-decoration: none;
  transition: ease 0.5s;

  &:hover {
    background: #fff;
    color: #f11593;
    transition: ease 0.5s;
  }

  &:disabled {
    background: #dedede;
    color: #f11593;
    transition: ease 0.5s;
  }

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
  border-radius: ${({ $isInverted }) =>
    $isInverted ? '75px 0px' : '0px 75px'};
`;
