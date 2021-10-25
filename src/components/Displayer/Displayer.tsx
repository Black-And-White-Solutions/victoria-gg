import React, { VoidFunctionComponent, ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
  Component,
  TitleArea,
  DescriptionArea,
  ButtonArea,
  ContentArea,
} from './DisplayerComponents';

type ComponentProps = {
  buttonChildren: ReactChild[] | ReactNode;
  children?: ReactChild[] | ReactNode;
  description: string;
  inverted?: boolean;
  title: string;
};

const Displayer: VoidFunctionComponent<ComponentProps> = ({
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

Displayer.defaultProps = {
  description: 'Description',
  inverted: false,
  title: 'Title',
};

Displayer.propTypes = {
  buttonChildren: PropTypes.node,
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Displayer;
